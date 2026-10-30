"use client";

import { mediaSrc } from "@/content/media";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Media } from "@/content/site";
import { Photo } from "./Photo";

/** Galeria responsiva com ampliação (lightbox) acessível. */
export function ImageGallery({ items, columns = 3 }: { items: Media[]; columns?: 2 | 3 }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <ul className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} lg:gap-6`}>
        {items.map((m, i) => (
          <li key={i}>
            {mediaSrc(m) ? (
              <button type="button" onClick={() => setActive(i)} className="block w-full text-left" aria-label={`Ampliar foto: ${m.alt}`}>
                <Photo media={m} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </button>
            ) : (
              <Photo media={m} />
            )}
            {m.caption && <p className="muted mt-3 text-sm">{m.caption}</p>}
          </li>
        ))}
      </ul>
      {active !== null && mediaSrc(items[active]) && <Lightbox media={items[active]} onClose={close} />}
    </>
  );
}

export function Lightbox({ media, onClose }: { media: Media; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={media.alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur" onClick={onClose}>
      <div className="relative h-[80svh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <Image src={mediaSrc(media)!} alt={media.alt} fill sizes="100vw" className="object-contain" />
      </div>
      <button type="button" autoFocus onClick={onClose} className="btn btn-ghost absolute top-4 right-4 bg-noir text-snow" aria-label="Fechar foto ampliada">
        Fechar
      </button>
      {media.caption && <p className="absolute bottom-6 inset-x-0 text-center text-snow/80">{media.caption}</p>}
    </div>
  );
}
