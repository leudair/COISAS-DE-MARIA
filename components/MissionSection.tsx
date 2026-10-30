import { mission } from "@/content/site";
import { Photo } from "./Photo";
import { Quote, StorySection } from "./StorySection";

export function MissionSection() {
  return (
    <StorySection id="missao" title={mission.title}>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Quote>{mission.quote}</Quote>
          <ul className="mt-14">
            {mission.pillars.map((p) => (
              <li key={p} className="rule border-t py-4 text-lg">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <Photo media={mission.photos[0]} />
      </div>
    </StorySection>
  );
}
