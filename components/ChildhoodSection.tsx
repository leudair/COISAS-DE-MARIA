import { tone } from "@/content/tones";
import { childhood } from "@/content/site";
import { BiographyTimeline } from "./BiographyTimeline";
import { Photo } from "./Photo";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

export function ChildhoodSection() {
  return (
    <StorySection from={tone.night} to={tone.plum} id="historia" title={childhood.title}>
      <Photo media={childhood.photos[0]} sizes="(min-width: 1180px) 1100px, 100vw" />
      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
        <BiographyTimeline items={childhood.milestones} columns={2} />
        <div className="self-start lg:sticky lg:top-28">
          <Quote>{childhood.quote}</Quote>
          {childhood.review && <ReviewNote />}
        </div>
      </div>
    </StorySection>
  );
}
