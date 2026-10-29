import Image from "next/image";
import { mediaSrc } from "@/content/media";

/**
 * Logo provisória (tipográfica). Ao salvar public/media/logo/logo-horizontal.svg
 * (ou .png), ela substitui o texto automaticamente. Só fazer após a aprovação da nova logo.
 */
const LOGO_SRC = mediaSrc({ file: "logo/logo-horizontal" });

export function Logo({ className = "" }: { className?: string }) {
  if (LOGO_SRC) {
    return <Image src={LOGO_SRC} alt="Coisas de Maria" width={160} height={32} className={className} />;
  }
  return (
    <span className={`inline-flex items-baseline gap-1.5 text-lg font-black tracking-tight ${className}`}>
      <span className="text-snow">Ana Liz</span>
      <span className="text-pink">·</span>
      <span className="text-sm font-bold text-snow/60">Coisas de Maria</span>
    </span>
  );
}
