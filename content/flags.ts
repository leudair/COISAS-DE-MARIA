/**
 * Mostra avisos de revisão (textos a aprovar, fotos pendentes).
 * Defina NEXT_PUBLIC_SHOW_REVIEW_NOTES=false na publicação definitiva.
 */
export const showReviewNotes = process.env.NEXT_PUBLIC_SHOW_REVIEW_NOTES !== "false";
