import Image from "next/image";

/**
 * Logo provisória (tipográfica). Substituir por /public/media/logo/logo-horizontal.svg
 * somente após aprovação da nova proposta de logo.
 */
const LOGO_SRC = ""; // ex.: "/media/logo/logo-horizontal-branca.svg"

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
