import Image from "next/image";
import { mediaSrc } from "@/content/media";
import type { Media } from "@/content/site";

const ratioClass = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-video",
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

  const src = mediaSrc(media);

  if (!src) {
    return (
      <div className={frame} role="img" aria-label={`Foto pendente: ${media.needed}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-current/30 p-6 text-center opacity-70">
          <span className="text-sm font-semibold">Foto pendente</span>
          <span className="max-w-[26ch] text-sm leading-snug opacity-80">{media.needed}</span>
        </div>
      </div>
    );
  }

  return (
    <figure className={frame}>
      <Image src={src} alt={media.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </figure>
  );
}
