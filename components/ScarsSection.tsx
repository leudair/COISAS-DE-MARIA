import { scars } from "@/content/site";
import { Photo } from "./Photo";
import { ReviewNote } from "./ReviewNote";
import { Quote, StorySection } from "./StorySection";

export function ScarsSection() {
  return (
    <StorySection id="cicatrizes" title={scars.title} className="border-t border-white/10">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <div className="prose-story lead">
            {scars.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Quote className="mt-12">{scars.quote}</Quote>
          {scars.review && <ReviewNote>Informações de saúde e cronologia a revisar com a Ana. Não afirmar cura.</ReviewNote>}
        </div>
        <div className="order-1 lg:order-2">
          <Photo media={scars.photo} />
        </div>
      </div>
    </StorySection>
  );
}
