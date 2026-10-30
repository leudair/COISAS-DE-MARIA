import { mirror } from "@/content/site";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

export function MirrorSection() {
  return (
    <StorySection id="espelho" number="03" title={mirror.title} subtitle={mirror.subtitle}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Moldura de espelho: reflexo abstrato sobre a moldura, nunca sobre o rosto recriado */}
        <Reveal className="relative w-full">
          <div aria-hidden className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-blush/40 via-white/5 to-champagne/30 opacity-60" />
          <div className="mirror-sheen relative overflow-hidden rounded-[28px]">
            <Photo media={mirror.photo} />
          </div>
        </Reveal>
        <div>
          {mirror.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="lead mb-5">{p}</p>
            </Reveal>
          ))}
          <Quote className="mt-10">{mirror.quote}</Quote>
          {mirror.review && <ReviewNote />}
        </div>
      </div>
    </StorySection>
  );
}
