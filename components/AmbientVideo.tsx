"use client";

import { useEffect, useRef } from "react";

type Props = { src?: string; poster?: string; className?: string; label: string };

/**
 * Vídeo decorativo: sem som, em loop, só toca quando visível.
 * Com prefers-reduced-motion fica parado na capa.
 */
export function AmbientVideo({ src, poster, className = "", label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !mq.matches) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  if (!src) {
    // eslint-disable-next-line @next/next/no-img-element
    return poster ? <img src={poster} alt="" className={`object-cover ${className}`} /> : null;
  }

  return (
    <video
      ref={ref}
      className={`object-cover ${className}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
