/** Ícones de traço fino da história, desenhados para o site (24×24, cor herdada). */
const paths: Record<string, React.ReactNode> = {
  capacete: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M3 16h18v2H3z" />
      <path d="M10 8V6h4v2" />
      <path d="M12 8v4" />
    </>
  ),
  capelo: (
    <>
      <path d="M2 9l10-4 10 4-10 4z" />
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
      <path d="M20 10v5" />
    </>
  ),
  caixa: (
    <>
      <path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5z" />
      <path d="M3 7.5l9 4.5 9-4.5" />
      <path d="M12 12v9" />
      <path d="M7.5 5.2l9 4.6" />
    </>
  ),
  sacola: (
    <>
      <path d="M5 8h14l-1 13H6z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  casa: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  sala: (
    <>
      <path d="M5 21V4h14v17" />
      <path d="M3 21h18" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2" />
      <path d="M10 21v-4h4v4" />
    </>
  ),
  loja: (
    <>
      <path d="M4 10v10h16V10" />
      <path d="M3 10l2-6h14l2 6c0 1.4-1.1 2.5-2.5 2.5S16 11.4 16 10c0 1.4-1.1 2.5-2.5 2.5h-3C9.1 12.5 8 11.4 8 10c0 1.4-1.1 2.5-2.5 2.5S3 11.4 3 10z" />
      <path d="M10 20v-4h4v4" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  ondas: (
    <>
      <circle cx="17" cy="6" r="2.5" />
      <path d="M2 14c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" />
      <path d="M2 18.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5" />
    </>
  ),
  coracao: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />,
  raiz: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7z" />
      <path d="M12 15c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z" />
    </>
  ),
  estrela: <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />,
  livro: (
    <>
      <path d="M12 6c-2-1.5-5-2-8-1.5v14c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-14c-3-.5-6 0-8 1.5z" />
      <path d="M12 6v14" />
    </>
  ),
};

export type IconName = keyof typeof paths;

/** Medalhão: ícone num círculo com aro fino e um segundo aro dourado em volta. */
export function StoryIcon({ name }: { name: string }) {
  return (
    <span aria-hidden className="medallion">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {paths[name] ?? paths.estrela}
      </svg>
    </span>
  );
}
