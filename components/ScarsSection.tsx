import { tone } from "@/content/tones";
import { scars } from "@/content/site";
import { Photo } from "./Photo";
import { Quote, StorySection } from "./StorySection";

export function ScarsSection() {
  return (
    <StorySection from={tone.night} to={tone.noir} id="cicatrizes" title={scars.title} >
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <div className="prose-story lead">
            {scars.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Quote className="mt-8 lg:mt-12">{scars.quote}</Quote>
        </div>
        <div className="order-1 lg:order-2">
          <Photo media={scars.photo} />
        </div>
      </div>
    </StorySection>
  );
}
