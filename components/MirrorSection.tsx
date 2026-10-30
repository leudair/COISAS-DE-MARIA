import { mirror } from "@/content/site";
import { Photo } from "./Photo";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

export function MirrorSection() {
  return (
    <StorySection id="espelho" title={mirror.title} subtitle={mirror.subtitle}>
      <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Photo media={mirror.photo} />
        <div>
          <div className="prose-story lead">
            {mirror.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Quote className="mt-12">{mirror.quote}</Quote>
          {mirror.review && <ReviewNote />}
        </div>
      </div>
    </StorySection>
  );
}
