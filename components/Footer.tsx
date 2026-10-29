import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="container-content flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-snow/50">{site.concept}</p>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-snow/40">Canais oficiais</p>
          <SocialLinks className="mt-3 flex-col !gap-2" />
        </div>
        <div className="text-sm text-snow/50">
          <Link href="/privacidade" className="font-semibold text-snow/70 hover:text-pink">Política de privacidade</Link>
          {/* TODO: razão social, CNPJ e endereço da Coisas de Maria (informações institucionais) e avisos legais aplicáveis */}
          <p className="mt-3">© {new Date().getFullYear()} Coisas de Maria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
