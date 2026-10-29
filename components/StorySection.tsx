import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
  titleClassName?: string;
  children: ReactNode;
};

/** Estrutura padrão das seções narrativas: numeração, título e conteúdo. */
export function StorySection({ id, number, title, subtitle, className = "", center, titleClassName = "", children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section ${className}`}>
      <div className="container-content relative">
        <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <p className="eyebrow">Capítulo {number}</p>
          <h2 id={`${id}-title`} className={`heading-lg mt-4 ${titleClassName}`}>
            {title}
          </h2>
          {subtitle && <p className="lead mt-4 font-semibold text-blush">{subtitle}</p>}
        </Reveal>
        <div className="mt-12 lg:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function Quote({ children, className = "" }: { children: string; className?: string }) {
  return (
    <Reveal as="figure" className={className}>
      <blockquote className="quote text-3d-soft">
        <span aria-hidden className="text-pink">“</span>
        {children}
        <span aria-hidden className="text-pink">”</span>
      </blockquote>
      <figcaption className="mt-4 text-sm font-bold text-ash">— Ana Liz</figcaption>
    </Reveal>
  );
}
