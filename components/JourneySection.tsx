import { journey } from "@/content/site";
import { BiographyTimeline } from "./BiographyTimeline";
import { ImageGallery } from "./ImageGallery";
import { ReviewNote } from "./ReviewNote";
import { StorySection } from "./StorySection";

export function JourneySection() {
  return (
    <StorySection id="trajetoria" number="02" title={journey.title} className="bg-graphite">
      <BiographyTimeline items={journey.steps} alternate />
      <div className="mt-16 lg:mt-24">
        <ImageGallery items={journey.photos} />
      </div>
      {journey.review && <ReviewNote />}
    </StorySection>
  );
}
