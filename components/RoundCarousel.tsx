"use client";

/**
 * Round Carousel — Originkit, adaptado para o projeto Ana Liz.
 *
 * Base: geometria do anel, inércia do arraste, inclinação, faces internas
 * escurecidas e preset (215×291, spacing 4, speed 3, radius 16, innerDim 2)
 * do componente original da Originkit.
 *
 * Adaptações:
 * - Recebe fotos do conteúdo (`Media`); sem `src`, mostra o placeholder.
 * - Sem imagens de exemplo externas: apenas fotos reais e autorizadas.
 * - Legendas, ampliação (lightbox) e navegação por botões/teclado.
 * - Pausa ao passar o mouse, tocar ou arrastar; retoma após alguns segundos.
 * - Sem rotação automática com prefers-reduced-motion; para fora da tela.
 * - Tamanho responsivo e `touch-action: pan-y` para não travar a rolagem no celular.
 * - Borda pink sutil nas fotos.
 */

import { mediaSrc } from "@/content/media";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Media } from "@/content/site";
import { Photo } from "./Photo";
import { Lightbox } from "./ImageGallery";

type Props = {
  items: Media[];
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  speed?: number;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  innerDim?: number;
};

const RESUME_AFTER = 3000; // ms

export function RoundCarousel({
  items,
  imageWidth = 215,
  imageHeight = 291,
  spacing = 4,
  speed = 3,
  direction = "right",
  drag = true,
  sensitivity = 5,
  tilt = 0,
  perspective = 3000,
  cornerRadius = 16,
  innerDim = 2,
}: Props) {
  const count = items.length;
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0, moved: 0 });
  const justDragged = useRef(false);
  const pausedUntil = useRef(0);
  const hovering = useRef(false);
  const visible = useRef(false);
  const reduced = useRef(false);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState<number | null>(null);
  const [front, setFront] = useState(0);

  // Celular: fotos menores e anel mais fechado para caber na largura.
  const compact = scale < 1;
  const w = Math.round(imageWidth * scale);
  const h = Math.round(imageHeight * scale);
  const angle = 360 / count;
  const factor = 1 + (compact ? Math.min(spacing, 2) : spacing) * 0.15;
  const radius = (w * factor) / (2 * Math.tan(Math.PI / count));
  const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);

  const apply = useCallback(() => {
    if (ringRef.current) ringRef.current.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`;
  }, [radius]);

  // Índice da foto de frente, para o contador e a navegação.
  const syncFront = useCallback(() => {
    const idx = ((Math.round(-rotYRef.current / angle) % count) + count) % count;
    setFront((f) => (f === idx ? f : idx));
  }, [angle, count]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const ro = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setScale(width < 640 ? Math.max(0.6, Math.min(1, (width * 0.4) / imageWidth)) : 1);
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, [imageWidth]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    const onMq = () => (reduced.current = mq.matches);
    mq.addEventListener("change", onMq);

    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting));
    if (stageRef.current) io.observe(stageRef.current);

    apply();
    const draw = (now: number) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      if (visible.current && !dragRef.current.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= reduced.current ? 0.8 : 0.94;
          apply();
        } else if (!reduced.current && !hovering.current && now > pausedUntil.current && document.visibilityState === "visible") {
          rotYRef.current += degPerSec * f;
          apply();
        }
        syncFront();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, [apply, degPerSec, syncFront]);

  const pause = () => (pausedUntil.current = performance.now() + RESUME_AFTER);

  const rotateTo = (idx: number) => {
    // Menor caminho até a foto escolhida.
    const target = -idx * angle;
    const diff = ((((target - rotYRef.current) % 360) + 540) % 360) - 180;
    velRef.current = 0;
    const ring = ringRef.current;
    if (ring && !reduced.current) {
      ring.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1)";
      window.setTimeout(() => ring && (ring.style.transition = ""), 650);
    }
    rotYRef.current += diff;
    apply();
    syncFront();
    pause();
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!drag) return;
    dragRef.current = { active: true, x: e.clientX, moved: 0 };
    velRef.current = 0;
    justDragged.current = false;
    pause();
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    d.x = e.clientX;
    d.moved += Math.abs(dx);
    if (d.moved > 6) e.currentTarget.setPointerCapture?.(e.pointerId);
    const k = 0.06 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
    apply();
  };
  const onPointerUp = (e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    justDragged.current = dragRef.current.moved > 6;
    dragRef.current.active = false;
    pause();
  };

  const face: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: cornerRadius,
    overflow: "hidden",
    backfaceVisibility: "hidden",
  };

  return (
    <div>
      <div
        ref={stageRef}
        className="relative mx-auto flex w-full max-w-6xl touch-pan-y select-none items-center justify-center overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
        style={{ height: h + 120, perspective: `${perspective}px`, cursor: drag ? "grab" : "default" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => {
          hovering.current = false;
          pause();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") rotateTo(front + 1);
          if (e.key === "ArrowLeft") rotateTo(front - 1);
        }}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Álbum de memórias da família. Arraste ou use as setas para navegar."
      >
        <div style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt}deg)` }}>
          <div ref={ringRef} style={{ position: "relative", width: w, height: h, transformStyle: "preserve-3d" }}>
            {items.map((m, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Face frontal */}
                <button
                  type="button"
                  style={face}
                  className="block shadow-[0_0_0_1px_rgba(245,0,135,0.3),0_10px_30px_rgba(0,0,0,0.35)]"
                  aria-label={`${m.caption ?? m.alt}${mediaSrc(m) ? ", ampliar foto" : " (foto pendente)"}`}
                  onFocus={() => rotateTo(i)}
                  onClick={(e) => {
                    if (justDragged.current) return e.preventDefault();
                    if (mediaSrc(m)) setActive(i);
                  }}
                >
                  <Photo media={m} fill sizes={`${imageWidth}px`} className="!rounded-none !border-0" />
                  {mediaSrc(m) && m.caption && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-8 pb-3 text-left text-sm font-bold text-snow">
                      {m.caption}
                    </span>
                  )}
                </button>
                {/* Face interna (verso), escurecida */}
                <div aria-hidden style={{ ...face, transform: "rotateY(180deg)", filter: `brightness(${innerDim / 10})` }}>
                  <Photo media={m} fill sizes={`${imageWidth}px`} className="!rounded-none !border-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
      <div className="capsule">
        <button type="button" className="btn !min-h-11 !w-11 !p-0 hover:bg-white/10" aria-label="Foto anterior" onClick={() => rotateTo(front - 1)}>
          <span aria-hidden>←</span>
        </button>
        <span className="min-w-16 text-center text-sm font-bold text-white/80" aria-live="polite">
          {front + 1} / {count}
        </span>
        <button type="button" className="btn !min-h-11 !w-11 !p-0 hover:bg-white/10" aria-label="Próxima foto" onClick={() => rotateTo(front + 1)}>
          <span aria-hidden>→</span>
        </button>
      </div>
      </div>

      {active !== null && mediaSrc(items[active]) && <Lightbox media={items[active]} onClose={() => setActive(null)} />}
    </div>
  );
}
