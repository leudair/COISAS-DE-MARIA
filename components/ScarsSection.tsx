import { scars } from "@/content/site";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

/** Transição de atmosfera escura para luz delicada, simbolizando esperança. */
export function ScarsSection() {
  return (
    <StorySection
      id="cicatrizes"
      number="04"
      title={scars.title}
      className="overflow-hidden bg-[linear-gradient(180deg,#000_0%,#0e0e0e_45%,#1d1418_80%,#2a1a22_100%)]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(245,194,217,0.18),transparent)]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          {scars.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className="lead mb-6">{p}</p>
            </Reveal>
          ))}
          <Quote className="mt-10 text-blush">{scars.quote}</Quote>
          {scars.review && <ReviewNote>Informações de saúde e cronologia a revisar com a Ana. Não afirmar cura.</ReviewNote>}
        </div>
        <Reveal className="order-1 mx-auto w-full max-w-[420px] lg:order-2">
          <Photo media={scars.photo} />
        </Reveal>
      </div>
    </StorySection>
  );
}
