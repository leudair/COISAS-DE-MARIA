import { childhood } from "@/content/site";
import { Photo } from "./Photo";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

export function ChildhoodSection() {
  return (
    <StorySection id="historia" title={childhood.title}>
      <Photo media={childhood.photos[0]} sizes="(min-width: 1180px) 1100px, 100vw" />
      <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {childhood.milestones.map((m) => (
            <li key={m.title} className="rule border-t py-6">
              <h3 className="heading-md">{m.title}</h3>
              <p className="muted mt-2">{m.text}</p>
            </li>
          ))}
        </ul>
        <div className="self-start lg:sticky lg:top-28">
          <Quote>{childhood.quote}</Quote>
          {childhood.review && <ReviewNote />}
        </div>
      </div>
    </StorySection>
  );
}
