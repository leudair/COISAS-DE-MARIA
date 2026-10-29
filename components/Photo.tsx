import Image from "next/image";
import type { Media } from "@/content/site";

const ratioClass = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

type Props = {
  media: Media;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Sobrescreve a proporção (ex.: para preencher o container). */
  fill?: boolean;
};

/**
 * Foto original, sem filtros sobre o rosto. Usa object-cover apenas para
 * enquadramento (sem distorção). Sem `src`, mostra placeholder identificado.
 */
export function Photo({ media, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority, fill }: Props) {
  const frame = `media-frame ${fill ? "h-full w-full" : ratioClass[media.ratio ?? "portrait"]} ${className}`;

  if (!media.src) {
    return (
      <div className={frame} role="img" aria-label={`Foto pendente: ${media.needed}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-pink/40 p-6 text-center [border-radius:inherit]">
          <svg aria-hidden width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-pink/70">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="M8 5l1.5-2h5L16 5" />
          </svg>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-pink">Foto pendente</span>
          <span className="max-w-[24ch] text-sm leading-snug text-snow/60">{media.needed}</span>
        </div>
      </div>
    );
  }

  return (
    <figure className={frame}>
      <Image src={media.src} alt={media.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </figure>
  );
}
