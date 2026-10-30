import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  /** Cor de fundo de onde a seção vem (a da seção anterior) e para onde vai. */
  from: string;
  to: string;
  className?: string;
  center?: boolean;
  children: ReactNode;
};

/** Estrutura das seções narrativas: título serifado e conteúdo, com o fundo passando suavemente da cor anterior para a sua. */
export function StorySection({ id, title, subtitle, from, to, className = "", center, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section ${className}`} style={bandStyle(from, to)}>
      <div className="container-content relative">
        <header className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <h2 id={`${id}-title`} className="heading-lg">
            {title}
          </h2>
          {subtitle && <p className="lead muted mt-5">{subtitle}</p>}
        </header>
        <div className="mt-14 lg:mt-20">{children}</div>
      </div>
    </section>
  );
}

export function Quote({ children, className = "" }: { children: string; className?: string }) {
  return (
    <figure className={className}>
      <blockquote className="quote">“{children}”</blockquote>
      <figcaption className="muted mt-5 text-base">Ana Liz</figcaption>
    </figure>
  );
}

/** Transição de cor no topo de cada seção, para não haver corte seco entre elas. */
export function bandStyle(from: string, to: string): React.CSSProperties {
  return { background: `linear-gradient(180deg, ${from} 0, ${to} 360px)`, backgroundColor: to };
}
