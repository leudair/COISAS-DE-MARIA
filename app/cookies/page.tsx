import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Política de cookies — Ana Liz | Coisas de Maria",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <LegalPage
      title="Política de cookies"
      intro="Esta página explica o que são cookies, quais usamos neste site e como você controla a sua escolha."
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies e tecnologias parecidas, como o armazenamento local do navegador, são pequenos arquivos que um site guarda no seu
        aparelho para lembrar informações entre uma visita e outra.
      </p>

      <h2>2. Quais usamos</h2>
      <table>
        <thead>
          <tr><th>Nome</th><th>Tipo</th><th>Para que serve</th><th>Duração</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>cdm-cookie-consent</td>
            <td>Necessário</td>
            <td>Guarda a sua escolha no aviso de cookies</td>
            <td>Até 12 meses ou até você limpar o navegador</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fotos, vídeos e fontes ficam no próprio site. Hoje não usamos ferramentas de estatística, anúncios nem cookies de
        terceiros.
      </p>

      <h2>3. Categorias</h2>
      <ul>
        <li><strong>Necessários</strong>: essenciais para o site funcionar. Não dependem de consentimento.</li>
        <li><strong>Estatística</strong>: medem visitas de forma agregada. Só são ativados se você autorizar.</li>
        <li><strong>Marketing</strong>: medem campanhas em redes sociais. Só são ativados se você autorizar.</li>
      </ul>
      <p>Se passarmos a usar estatística ou marketing, esta tabela será atualizada e o aviso aparecerá de novo para você decidir.</p>

      <h2>4. Como mudar a sua escolha</h2>
      <p>
        Você pode mudar a sua escolha quando quiser: <CookiePreferencesButton className="link" />. Também pode apagar ou bloquear
        cookies nas configurações do navegador. Bloquear os necessários pode fazer o aviso aparecer em toda visita.
      </p>

      <h2>5. Links externos</h2>
      <p>
        Ao clicar nos links para Instagram ou para a loja virtual, você sai deste site. Esses serviços usam seus próprios cookies,
        conforme as políticas deles.
      </p>

      <p className="mt-10">
        Mais detalhes sobre dados pessoais na <Link href="/privacidade">Política de privacidade</Link>.
      </p>
    </LegalPage>
  );
}
