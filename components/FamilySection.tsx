import { family } from "@/content/site";
import { ReviewNote } from "./ReviewNote";
import { RoundCarousel } from "./RoundCarousel";
import { StorySection } from "./StorySection";

export function FamilySection() {
  return (
    <StorySection id="familia" title={family.title} tone="light" center>
      <div className="mx-auto max-w-2xl text-center">
        <p className="lead mx-auto">{family.text}</p>
        <p className="muted mx-auto mt-5 max-w-[52ch]">{family.members}</p>
      </div>
      <div className="mt-14">
        <RoundCarousel items={family.album} imageWidth={360} imageHeight={203} spacing={1} />
      </div>
      {family.review && (
        <div className="text-center">
          <ReviewNote>Usar somente fotos reais e autorizadas pela família.</ReviewNote>
        </div>
      )}
    </StorySection>
  );
}
