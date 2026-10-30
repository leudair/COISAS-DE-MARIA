import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company, pending } from "@/content/legal";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Termos de uso — Ana Liz | Coisas de Maria",
  alternates: { canonical: "/termos" },
};

export default function Termos() {
  return (
    <LegalPage
      title="Termos de uso"
      intro="Ao navegar neste site, você concorda com estes termos. Se não concordar, por favor não utilize o site."
    >
      <h2>1. Quem somos</h2>
      <p>
        Este site é mantido por {pending(company.legalName, "razão social")}, nome comercial {company.storeName}, CNPJ{" "}
        {pending(company.cnpj, "CNPJ")}. Contato: {pending(company.email, "e-mail")}.
      </p>

      <h2>2. Objetivo do site</h2>
      <p>
        O site apresenta a história de Ana Liz e da marca {company.storeName}. Ele é informativo e não realiza vendas, cadastros ou
        pagamentos.
      </p>

      <h2>3. Loja virtual e conteúdo adulto</h2>
      <p>
        Os links para a <a href={links.store} target="_blank" rel="noopener noreferrer">loja virtual</a> levam a outro site, com
        termos, políticas de troca, entrega e privacidade próprios. As compras são regidas por essas regras e pelo Código de
        Defesa do Consumidor (Lei nº 8.078/1990).
      </p>
      <p>A loja virtual comercializa produtos destinados exclusivamente a maiores de 18 anos.</p>

      <h2>4. Natureza do conteúdo</h2>
      <p>
        Os textos sobre saúde, superação e fé são relatos pessoais de Ana Liz. Eles não substituem orientação médica, psicológica
        ou de qualquer outro profissional. Procure sempre um profissional habilitado.
      </p>

      <h2>5. Direitos autorais e marca</h2>
      <p>
        Textos, fotos, vídeos, artes, logotipo e a marca {company.storeName} são protegidos pela Lei de Direitos Autorais (Lei nº
        9.610/1998) e pela Lei de Propriedade Industrial (Lei nº 9.279/1996). É proibido copiar, reproduzir, alterar ou usar esse
        conteúdo para fins comerciais sem autorização por escrito. O compartilhamento dos links do site é livre.
      </p>
      <p>
        A imagem de Ana Liz é protegida. Não é permitido usá-la, alterá-la ou recriá-la, inclusive com inteligência artificial, sem
        autorização.
      </p>

      <h2>6. Uso adequado</h2>
      <p>Ao usar o site, você se compromete a não:</p>
      <ul>
        <li>tentar invadir, sobrecarregar ou prejudicar o funcionamento do site;</li>
        <li>coletar conteúdo de forma automatizada para uso comercial;</li>
        <li>usar o conteúdo para ofender, enganar ou violar direitos de terceiros.</li>
      </ul>

      <h2>7. Links de terceiros</h2>
      <p>
        O site tem links para Instagram e outros serviços externos. Não controlamos esses serviços e não respondemos pelo conteúdo
        ou pelas práticas deles.
      </p>

      <h2>8. Disponibilidade e responsabilidade</h2>
      <p>
        Fazemos o possível para manter o site no ar e com informações corretas, mas ele pode ficar indisponível para manutenção ou
        por motivos fora do nosso controle. O conteúdo pode ser alterado ou removido a qualquer momento.
      </p>

      <h2>9. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a <Link href="/privacidade">Política de privacidade</Link> e a{" "}
        <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes termos seguem a legislação brasileira. Fica eleito o foro da comarca de {pending(company.forum, "cidade/UF")}, salvo
        quando a lei garantir ao consumidor o foro do seu domicílio.
      </p>

      <h2>11. Alterações</h2>
      <p>Estes termos podem ser atualizados. A data no topo indica a última versão.</p>
    </LegalPage>
  );
}
