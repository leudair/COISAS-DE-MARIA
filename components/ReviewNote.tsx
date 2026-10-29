import { showReviewNotes } from "@/content/flags";

/** Aviso visível apenas na versão de aprovação. */
export function ReviewNote({ children = "Texto a revisar e aprovar com a Ana antes da publicação." }: { children?: string }) {
  if (!showReviewNotes) return null;
  return (
    <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-champagne/40 px-4 py-1.5 text-xs font-bold text-champagne">
      <span aria-hidden>●</span> {children}
    </p>
  );
}
