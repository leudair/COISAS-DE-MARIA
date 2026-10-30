import { tone } from "@/content/tones";
import { family } from "@/content/site";
import { RoundCarousel } from "./RoundCarousel";
import { StorySection } from "./StorySection";

export function FamilySection() {
  return (
    <StorySection from={tone.noir} to={tone.rosewood} id="familia" title={family.title} center>
      <div className="mx-auto max-w-2xl text-center">
        <p className="lead mx-auto">{family.text}</p>
        <p className="muted mx-auto mt-5 max-w-[52ch]">{family.members}</p>
      </div>
      <div className="mt-6 lg:mt-14">
        <RoundCarousel items={family.album} imageWidth={360} imageHeight={203} spacing={1} />
      </div>
    </StorySection>
  );
}
