import { tone } from "@/content/tones";
import { mirror } from "@/content/site";
import { Photo } from "./Photo";
import { Quote, StorySection } from "./StorySection";

export function MirrorSection() {
  return (
    <StorySection from={tone.wine} to={tone.night} id="espelho" title={mirror.title} subtitle={mirror.subtitle}>
      <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Photo media={mirror.photo} />
        <div>
          <div className="prose-story lead">
            {mirror.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Quote className="mt-8 lg:mt-12">{mirror.quote}</Quote>
        </div>
      </div>
    </StorySection>
  );
}
