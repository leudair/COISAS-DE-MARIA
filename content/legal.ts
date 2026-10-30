/**
 * Dados institucionais usados no rodapé e nas páginas legais
 * (Termos de Uso, Política de Privacidade e Política de Cookies).
 *
 * Campos vazios aparecem como "a informar" na versão de aprovação
 * e ficam ocultos na publicação. Preencha antes de publicar.
 */
export const company = {
  /** Nome da loja exibido no rodapé. */
  storeName: "Coisas de Maria",
  /** TODO: razão social que consta no CNPJ. */
  legalName: "",
  /** TODO: CNPJ no formato 00.000.000/0000-00. */
  cnpj: "",
  /** TODO: endereço (cidade/UF basta para o rodapé). */
  address: "",
  /** TODO: e-mail para pedidos sobre dados pessoais (LGPD) e dúvidas sobre o site. */
  email: "",
  /** Cidade/UF do foro (Termos de Uso). TODO: confirmar. */
  forum: "",
};

/** Data da última atualização das páginas legais. */
export const legalUpdatedAt = "30 de outubro de 2026";

/** Versão do texto de cookies. Ao mudar, o banner volta a aparecer para todos. */
export const cookieConsentVersion = 1;

export const legalPages = [
  { href: "/termos", label: "Termos de uso" },
  { href: "/privacidade", label: "Política de privacidade" },
  { href: "/cookies", label: "Política de cookies" },
];

/** Texto para campos ainda não preenchidos. */
export const pending = (value: string, label: string) => value || `[${label} a informar]`;
