import Link from "next/link";
import { site } from "@/content/site";
import { company, legalPages } from "@/content/legal";
import { showReviewNotes } from "@/content/flags";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { CookiePreferencesButton } from "./CookiePreferencesButton";

/** Linha institucional: mostra "a informar" só na versão de aprovação. */
function Info({ label, value }: { label: string; value: string }) {
  if (!value && !showReviewNotes) return null;
  return (
    <p>
      {label}: {value || <span className="text-gold">a informar</span>}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-noir py-16">
      <div className="container-content grid gap-10 text-[15px] lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-mist">{site.concept}</p>
        </div>
        <SocialLinks className="flex-col !gap-2" />
        <nav aria-label="Informações legais" className="lg:text-right">
          <ul className="space-y-2">
            {legalPages.map((p) => (
              <li key={p.href}><Link href={p.href} className="text-snow/80 hover:text-snow">{p.label}</Link></li>
            ))}
            <li><CookiePreferencesButton className="text-snow/80 hover:text-snow" /></li>
          </ul>
        </nav>
      </div>
      <div className="container-content mt-12 border-t border-white/10 pt-8 text-sm text-mist">
        <p className="font-semibold text-snow">{company.storeName}</p>
        <div className="mt-2 space-y-1">
          <Info label="Razão social" value={company.legalName} />
          <Info label="CNPJ" value={company.cnpj} />
          <Info label="Endereço" value={company.address} />
          <Info label="Contato" value={company.email} />
        </div>
        <p className="mt-4">© {new Date().getFullYear()} {company.storeName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
