"use client";
import { useState } from "react";

/**
 * Vídeo do YouTube que só carrega o player ao clicar (página mais leve e
 * sem cookies do YouTube até a pessoa decidir assistir).
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="media-frame aspect-video">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 block h-full w-full" aria-label={`Assistir: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            // Nem todo vídeo tem capa em alta; cai para a capa padrão.
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.src.includes("hqdefault")) img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
              else img.style.display = "none";
            }}
          />
          <span aria-hidden className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
          <span aria-hidden className="medallion absolute top-1/2 left-1/2 !m-0 !h-20 !w-20 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-snow transition-transform group-hover:scale-105">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
