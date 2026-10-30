import { tone } from "@/content/tones";
import { testimonials } from "@/content/site";
import { Photo } from "./Photo";
import { StorySection } from "./StorySection";

/**
 * Exibe SOMENTE depoimentos reais e autorizados (authorized: true).
 * Sem depoimentos, a seção não aparece — nunca conteúdo fictício.
 */
export function Testimonials() {
  const items = testimonials.filter((t) => t.authorized);
  if (items.length === 0) return null;
  return (
    <StorySection from={tone.night} to={tone.night} id="clientes" title="O que dizem as clientes">
      <ul className="grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <li key={i} className="rule border-t py-8">
            {t.photo && <Photo media={{ ...t.photo, ratio: "square" }} className="mb-6 !h-16 !w-16 !rounded-full" sizes="64px" />}
            <blockquote className="font-serif text-xl italic leading-snug">“{t.text}”</blockquote>
            <p className="muted mt-5">{t.name}</p>
          </li>
        ))}
      </ul>
    </StorySection>
  );
}
