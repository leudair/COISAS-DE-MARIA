import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-noir py-16">
      <div className="container-content grid gap-10 text-[15px] lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-mist">{site.concept}</p>
        </div>
        <SocialLinks className="flex-col !gap-2" />
        <div className="text-mist lg:text-right">
          <Link href="/privacidade" className="text-snow/80 hover:text-snow">Política de privacidade</Link>
          {/* TODO: razão social, CNPJ e endereço da Coisas de Maria (informações institucionais) e avisos legais aplicáveis */}
          <p className="mt-3">© {new Date().getFullYear()} Coisas de Maria</p>
        </div>
      </div>
    </footer>
  );
}
