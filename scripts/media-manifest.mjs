// Gera content/media-manifest.json com as fotos e vídeos encontrados em public/media.
// Roda automaticamente antes de `npm run dev` e `npm run build`.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, extname } from "node:path";

const root = "public/media";
const exts = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg", ".mp4", ".webm", ".mov"];
const manifest = {};

function walk(dir) {
  for (const name of readdirSync(dir).sort()) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (exts.includes(extname(name).toLowerCase())) {
      const rel = relative(root, full).split("\\").join("/");
      const key = rel.slice(0, -extname(rel).length).toLowerCase();
      manifest[key] ??= "/media/" + rel.split("/").map(encodeURIComponent).join("/");
    }
  }
}

walk(root);
writeFileSync("content/media-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`media-manifest: ${Object.keys(manifest).length} arquivo(s) em ${root}`);
