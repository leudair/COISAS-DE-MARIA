import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company, pending } from "@/content/legal";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade — Ana Liz | Coisas de Maria",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  const email = pending(company.email, "e-mail");
  return (
    <LegalPage
      title="Política de privacidade"
      intro="Esta política explica como tratamos dados pessoais neste site, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD) e o Marco Civil da Internet (Lei nº 12.965/2014)."
    >
      <h2>1. Quem é a controladora</h2>
      <p>
        A controladora dos dados é {pending(company.legalName, "razão social")}, nome comercial {company.storeName}, inscrita no
        CNPJ {pending(company.cnpj, "CNPJ")}, com endereço em {pending(company.address, "endereço")}.
      </p>

      <h2>2. O que é este site</h2>
      <p>
        Este é um site biográfico, que apresenta a história de Ana Liz e da marca {company.storeName}. Ele não vende produtos, não
        tem cadastro, login ou formulário e não pede dados pessoais. As compras acontecem na{" "}
        <a href={links.store} target="_blank" rel="noopener noreferrer">loja virtual</a>, que tem política de privacidade própria.
      </p>

      <h2>3. Quais dados tratamos</h2>
      <ul>
        <li>
          <strong>Dados técnicos de acesso</strong>: endereço IP, data e hora, navegador e páginas visitadas, registrados
          automaticamente pelo provedor de hospedagem para o site funcionar com segurança.
        </li>
        <li>
          <strong>Preferência de cookies</strong>: a escolha que você faz no aviso de cookies, salva no seu próprio navegador.
        </li>
        <li>
          <strong>Dados que você nos envia</strong>: se você entrar em contato por e-mail ou redes sociais, tratamos o nome,
          o contato e o conteúdo da mensagem para responder.
        </li>
        <li>
          <strong>Estatística e marketing</strong>: hoje o site não usa essas ferramentas. Se passar a usar, elas só serão
          ativadas com o seu consentimento, conforme a <Link href="/cookies">Política de cookies</Link>.
        </li>
      </ul>
      <p>Não tratamos dados pessoais sensíveis e o site não é direcionado a menores de 18 anos.</p>

      <h2>4. Para que usamos e com qual base legal</h2>
      <table>
        <thead>
          <tr><th>Finalidade</th><th>Base legal (art. 7º da LGPD)</th></tr>
        </thead>
        <tbody>
          <tr><td>Manter o site no ar, seguro e protegido contra abusos</td><td>Legítimo interesse (inciso IX)</td></tr>
          <tr><td>Guardar registros de acesso pelo prazo legal</td><td>Cumprimento de obrigação legal (inciso II), art. 15 do Marco Civil</td></tr>
          <tr><td>Lembrar sua escolha sobre cookies</td><td>Legítimo interesse (inciso IX)</td></tr>
          <tr><td>Responder mensagens que você enviar</td><td>Legítimo interesse (inciso IX)</td></tr>
          <tr><td>Estatística e marketing, se ativados</td><td>Consentimento (inciso I)</td></tr>
        </tbody>
      </table>

      <h2>5. Com quem compartilhamos</h2>
      <p>
        Não vendemos nem alugamos dados pessoais. Os dados técnicos ficam com o provedor de hospedagem do site, que pode manter
        servidores fora do Brasil. Nesse caso, a transferência segue o art. 33 da LGPD, com contratos e garantias adequadas.
        Também podemos fornecer dados quando exigido por lei ou por ordem judicial.
      </p>
      <p>
        Os links para Instagram e para a loja virtual levam a serviços de terceiros, que tratam seus dados segundo as políticas
        deles.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <ul>
        <li>Registros de acesso: 6 meses, como exige o art. 15 do Marco Civil da Internet.</li>
        <li>Preferência de cookies: até 12 meses, ou até você apagar os dados do navegador.</li>
        <li>Mensagens de contato: pelo tempo necessário para responder e resolver o assunto.</li>
      </ul>

      <h2>7. Seus direitos</h2>
      <p>Pelo art. 18 da LGPD, você pode, a qualquer momento e sem custo:</p>
      <ul>
        <li>confirmar se tratamos seus dados e ter acesso a eles;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
        <li>pedir a portabilidade dos dados;</li>
        <li>saber com quem compartilhamos seus dados;</li>
        <li>revogar o consentimento e saber as consequências de não concedê-lo;</li>
        <li>se opor a um tratamento feito sem consentimento, quando houver descumprimento da lei.</li>
      </ul>
      <p>
        Para exercer esses direitos, escreva para {email}. Respondemos em até 15 dias. Você também pode reclamar à Autoridade
        Nacional de Proteção de Dados (ANPD) em{" "}
        <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.
      </p>

      <h2>8. Canal de contato sobre dados</h2>
      <p>
        O canal de atendimento sobre dados pessoais é {email}. Como agente de tratamento de pequeno porte, a {company.storeName}{" "}
        está dispensada de indicar encarregado (Resolução CD/ANPD nº 2/2022), mas mantém este canal aberto.
      </p>

      <h2>9. Segurança</h2>
      <p>
        O site usa conexão criptografada (HTTPS) e não guarda senhas nem dados de pagamento. Adotamos medidas técnicas e
        administrativas razoáveis para proteger os dados contra acesso não autorizado, perda ou alteração.
      </p>

      <h2>10. Mudanças nesta política</h2>
      <p>
        Esta política pode ser atualizada. A data no topo indica a última versão. Mudanças relevantes serão avisadas no site.
      </p>
    </LegalPage>
  );
}
