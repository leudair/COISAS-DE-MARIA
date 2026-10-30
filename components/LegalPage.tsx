import Link from "next/link";
import { legalPages, legalUpdatedAt } from "@/content/legal";
import { Footer } from "./Footer";

/** Estrutura comum das páginas legais. */
export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <main id="conteudo" className="container-content max-w-3xl py-24">
        <Link href="/" className="link text-base">Voltar para a página inicial</Link>
        <h1 className="heading-lg mt-10">{title}</h1>
        <p className="mt-4 text-sm text-mist">Última atualização: {legalUpdatedAt}</p>
        <p className="lead mt-8">{intro}</p>
        <div className="legal mt-12">{children}</div>
        <nav aria-label="Outras políticas" className="mt-16 border-t border-white/10 pt-8 text-[15px]">
          <p className="text-mist">Veja também</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {legalPages.filter((p) => p.label !== title).map((p) => (
              <li key={p.href}><Link href={p.href} className="link">{p.label}</Link></li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
