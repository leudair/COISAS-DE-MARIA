import { showReviewNotes } from "@/content/flags";

/** Aviso visível apenas na versão de aprovação. */
export function ReviewNote({ children = "Texto a revisar e aprovar com a Ana antes da publicação." }: { children?: string }) {
  if (!showReviewNotes) return null;
  return <p className="mt-8 inline-block border-l-2 border-gold pl-3 text-left text-sm text-gold">Revisão: {children}</p>;
}
