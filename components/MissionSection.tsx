import { mission } from "@/content/site";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { Quote, StorySection } from "./StorySection";

export function MissionSection() {
  return (
    <StorySection id="missao" number="06" title={mission.title} className="band-carbon">
      <ul aria-label="Palavras da missão" className="flex flex-col gap-1 [perspective:800px]">
        {mission.words.map((w, i) => (
          <Reveal as="li" key={w} delay={i * 110}>
            <span
              className={`block font-black leading-none tracking-[-0.03em] [font-size:clamp(2.25rem,11vw,7rem)] ${
                i % 2 ? "text-snow/90 lg:pl-[12%]" : "text-3d text-pink"
              }`}
            >
              {w}
            </span>
          </Reveal>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-2 lg:gap-16">
        <ul className="grid gap-3">
          {mission.pillars.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 60} className="card flex items-center gap-4 px-5 py-4">
              <span aria-hidden className="h-2 w-2 flex-none rounded-full bg-pink" />
              <span className="font-semibold">{p}</span>
            </Reveal>
          ))}
        </ul>
        <div>
          <Reveal>
            <Photo media={mission.photos[0]} />
          </Reveal>
          <Quote className="mt-10">{mission.quote}</Quote>
        </div>
      </div>
    </StorySection>
  );
}
