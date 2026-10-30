import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Política de privacidade — Ana Liz | Coisas de Maria" };

/** TODO: substituir pelo texto jurídico definitivo (LGPD) antes da publicação. */
export default function Privacidade() {
  return (
    <main className="container-content max-w-3xl py-24">
      <Link href="/" className="link text-base">Voltar para a página inicial</Link>
      <h1 className="heading-lg mt-10">Política de privacidade</h1>
      <p className="lead mt-6">
        Este site é uma apresentação biográfica e não coleta dados pessoais por formulários nem realiza vendas. As compras
        acontecem na loja virtual oficial da Coisas de Maria, que possui sua própria política.
      </p>
      <p className="mt-8 border-l-2 border-gold pl-3 text-sm text-gold">
        Texto provisório. A versão definitiva deve ser revisada antes da publicação.
      </p>
    </main>
  );
}
