import { childhood } from "@/content/site";
import { BiographyTimeline } from "./BiographyTimeline";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

export function ChildhoodSection() {
  return (
    <StorySection id="historia" number="01" title={childhood.title}>
      <div aria-hidden className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-blush/10 blur-3xl" />
      <Reveal>
        <Photo media={childhood.photos[0]} sizes="(min-width: 1200px) 1136px, 100vw" />
      </Reveal>
      <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <BiographyTimeline items={childhood.milestones} />
        <div className="self-start lg:sticky lg:top-28">
          <Quote className="border-l-2 border-pink pl-6">{childhood.quote}</Quote>
          {childhood.review && <ReviewNote />}
        </div>
      </div>
    </StorySection>
  );
}
