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
  /** Dados conforme o rodapé da loja virtual. */
  cnpj: "32.526.649/0001-37",
  address: "Rua Maria da Gloria Pereira, 48, Camboriú/SC",
  /** E-mail para pedidos sobre dados pessoais (LGPD) e dúvidas sobre o site. */
  email: "jose.coisasdemaria@gmail.com",
  /** Telefone e WhatsApp. */
  phone: "(47) 99919-9802",
  /** Cidade/UF do foro (Termos de Uso). */
  forum: "Camboriú/SC",
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
