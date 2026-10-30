import { tone } from "@/content/tones";
import { journey } from "@/content/site";
import { BiographyTimeline } from "./BiographyTimeline";
import { Photo } from "./Photo";
import { ReviewNote } from "./ReviewNote";
import { StorySection } from "./StorySection";

export function JourneySection() {
  return (
    <StorySection from={tone.plum} to={tone.wine} id="trajetoria" title={journey.title}>
      <BiographyTimeline items={journey.steps} numbered />
      <div className="mt-16 lg:mt-24">
        <Photo media={journey.photos[0]} sizes="(min-width: 1180px) 1100px, 100vw" />
      </div>
      {journey.review && <ReviewNote />}
    </StorySection>
  );
}
