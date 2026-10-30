import { journey } from "@/content/site";
import { BiographyTimeline } from "./BiographyTimeline";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";
import { StorySection } from "./StorySection";

export function JourneySection() {
  return (
    <StorySection id="trajetoria" number="02" title={journey.title} className="band-carbon">
      <BiographyTimeline items={journey.steps} alternate />
      <div className="mt-16 lg:mt-24">
        <Reveal>
          <Photo media={journey.photos[0]} sizes="(min-width: 1200px) 1136px, 100vw" />
        </Reveal>
      </div>
      {journey.review && <ReviewNote />}
    </StorySection>
  );
}
