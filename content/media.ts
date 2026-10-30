import manifest from "./media-manifest.json";
import type { Media } from "./site";

const files = manifest as Record<string, string>;

/** Caminho público do arquivo, ou undefined se ainda não foi enviado. */
export function mediaSrc(media: Pick<Media, "src" | "file">): string | undefined {
  return media.src || (media.file ? files[media.file.toLowerCase()] : undefined);
}
