"use client";

/**
 * Round Carousel 3D — implementação provisória.
 *
 * O prompt prevê o componente "Round Carousel" da Originkit, cujo código ainda
 * não foi fornecido. Esta versão segue a mesma interface (lista de fotos) e os
 * requisitos do projeto; quando o código da Originkit chegar, basta trocar a
 * implementação mantendo as props.
 *
 * - Rotação 3D lenta, controle por arraste (mouse/toque) e teclado (setas).
 * - Pausa ao interagir; retoma após alguns segundos.
 * - Para totalmente fora da tela e com prefers-reduced-motion.
 * - Clique/Enter amplia a foto; legendas abaixo de cada cartão.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import type { Media } from "@/content/site";
import { Photo } from "./Photo";
import { Lightbox } from "./ImageGallery";

const AUTO_SPEED = 6; // graus por segundo
const RESUME_AFTER = 3500; // ms

export function RoundCarousel({ items }: { items: Media[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const angle = useRef(0);
  const drag = useRef<{ x: number; start: number; moved: boolean } | null>(null);
  const pausedUntil = useRef(0);
  const justDragged = useRef(false);
  const visible = useRef(false);
  const reduced = useRef(false);
  const [dims, setDims] = useState({ w: 200, radius: 320 });
  const [active, setActive] = useState<number | null>(null);
  const [focusIdx, setFocusIdx] = useState(0);

  const step = 360 / items.length;

  const apply = useCallback(() => {
    if (ringRef.current) ringRef.current.style.transform = `translateZ(${-dims.radius}px) rotateY(${angle.current}deg)`;
  }, [dims.radius]);

  // Dimensões responsivas: cartões menores e raio menor no celular.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const ro = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const w = Math.round(Math.min(260, Math.max(140, width * 0.4)));
      const radius = Math.round(w / 2 / Math.tan(Math.PI / items.length) + 24);
      setDims({ w, radius });
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, [items.length]);

  useEffect(apply, [apply]);

  // Loop de animação só quando visível e sem movimento reduzido.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    const onMq = () => (reduced.current = mq.matches);
    mq.addEventListener("change", onMq);

    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting));
    if (stageRef.current) io.observe(stageRef.current);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (visible.current && !reduced.current && !drag.current && now > pausedUntil.current && document.visibilityState === "visible") {
        angle.current -= AUTO_SPEED * dt;
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, [apply]);

  const pause = () => (pausedUntil.current = performance.now() + RESUME_AFTER);

  const rotateTo = (idx: number) => {
    const n = ((idx % items.length) + items.length) % items.length;
    setFocusIdx(n);
    angle.current = -n * step;
    if (ringRef.current) {
      ringRef.current.style.transition = reduced.current ? "none" : "transform 0.6s cubic-bezier(0.22,1,0.36,1)";
      apply();
      window.setTimeout(() => ringRef.current && (ringRef.current.style.transition = ""), 650);
    }
    pause();
  };

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, start: angle.current, moved: false };
    pause();
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 6 && !drag.current.moved) {
      drag.current.moved = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
    angle.current = drag.current.start + dx * 0.35;
    apply();
  };
  const onPointerUp = () => {
    justDragged.current = !!drag.current?.moved;
    drag.current = null;
    pause();
  };

  return (
    <div>
      <div
        ref={stageRef}
        className="carousel-stage relative mx-auto w-full max-w-5xl touch-pan-y select-none overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        style={{ height: Math.round(dims.w * 1.25) + 90 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={pause}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") rotateTo(focusIdx + 1);
          if (e.key === "ArrowLeft") rotateTo(focusIdx - 1);
        }}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Álbum de memórias da família. Arraste ou use as setas do teclado."
      >
        <div
          ref={ringRef}
          className="carousel-ring absolute top-6 left-1/2"
          style={{ width: dims.w, height: Math.round(dims.w * 1.25), marginLeft: -dims.w / 2 }}
        >
          {items.map((m, i) => (
            <div
              key={i}
              className="carousel-card"
              style={{ transform: `rotateY(${i * step}deg) translateZ(${dims.radius}px)` }}
            >
              <button
                type="button"
                className="block h-full w-full rounded-[28px] shadow-[0_0_0_1px_rgba(245,0,135,0.25),0_20px_50px_-20px_rgba(0,0,0,0.9)]"
                aria-label={`${m.caption ?? m.alt}${m.src ? ", ampliar" : " (foto pendente)"}`}
                onFocus={() => rotateTo(i)}
                onClick={(e) => {
                  if (justDragged.current) return e.preventDefault();
                  if (m.src) setActive(i);
                }}
              >
                <Photo media={m} fill sizes="260px" />
              </button>
              {m.caption && (
                <p className="mt-3 text-center text-sm font-bold text-snow/80" aria-hidden>
                  {m.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button type="button" className="btn btn-ghost !min-h-11 !w-11 !p-0" aria-label="Foto anterior" onClick={() => rotateTo(focusIdx - 1)}>
          <span aria-hidden>←</span>
        </button>
        <span className="min-w-16 text-center text-sm font-bold text-snow/60" aria-live="polite">
          {focusIdx + 1} / {items.length}
        </span>
        <button type="button" className="btn btn-ghost !min-h-11 !w-11 !p-0" aria-label="Próxima foto" onClick={() => rotateTo(focusIdx + 1)}>
          <span aria-hidden>→</span>
        </button>
      </div>

      {active !== null && items[active]?.src && <Lightbox media={items[active]} onClose={() => setActive(null)} />}
    </div>
  );
}
