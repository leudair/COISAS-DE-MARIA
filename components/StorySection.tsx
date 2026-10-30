import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  className?: string;
  center?: boolean;
  children: ReactNode;
};

/** Estrutura das seções narrativas: título serifado e conteúdo, em tom escuro ou rosé. */
export function StorySection({ id, title, subtitle, tone = "dark", className = "", center, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section tone-${tone} ${className}`}>
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
