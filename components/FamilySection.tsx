import { family } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";
import { RoundCarousel } from "./RoundCarousel";
import { StorySection } from "./StorySection";

export function FamilySection() {
  return (
    <StorySection id="familia" number="05" title={family.title} center titleClassName="text-3d-soft">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="lead">{family.text}</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {family.members.map((m) => (
            <li key={m.name} className="rounded-full border border-pink/30 px-5 py-2 text-sm">
              <strong className="font-extrabold text-snow">{m.name}</strong>
              <span className="text-snow/55"> · {m.text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="mt-14">
        <RoundCarousel items={family.album} />
      </div>
      {family.review && (
        <div className="text-center">
          <ReviewNote>Usar somente fotos reais e autorizadas pela família.</ReviewNote>
        </div>
      )}
    </StorySection>
  );
}
