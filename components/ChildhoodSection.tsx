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
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="grid grid-cols-2 gap-4 self-start lg:sticky lg:top-28">
          <Reveal className="col-span-2 sm:col-span-1">
            <Photo media={childhood.photos[0]} />
          </Reveal>
          <Reveal delay={120} className="col-span-2 sm:col-span-1 sm:mt-16">
            <Photo media={childhood.photos[1]} className="!aspect-[4/5]" />
          </Reveal>
        </div>
        <div>
          <BiographyTimeline items={childhood.milestones} />
          <Quote className="mt-14 border-l-2 border-pink pl-6">{childhood.quote}</Quote>
          {childhood.review && <ReviewNote />}
        </div>
      </div>
    </StorySection>
  );
}
