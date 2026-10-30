import { brand, links } from "@/content/site";
import { Photo } from "./Photo";
import { ReviewNote } from "./ReviewNote";
import { StorySection } from "./StorySection";

export function BrandSection() {
  return (
    <StorySection id="coisas-de-maria" title={brand.title} subtitle={brand.subtitle} tone="light">
      <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Photo media={brand.storePhoto} />
        <div className="prose-story lead">
          {brand.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <ul className="mt-20 grid gap-x-12 sm:grid-cols-3 lg:mt-28">
        {brand.differentials.map((d) => (
          <li key={d.title} className="rule border-t py-6">
            <h3 className="heading-md">{d.title}</h3>
            <p className="muted mt-2">{d.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="heading-md mt-20 lg:mt-28">{brand.categoriesTitle}</h3>
      <ul className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-6">
        {brand.categories.map((c) => (
          <li key={c.title} className="w-[72%] flex-none snap-start sm:w-auto">
            <Photo media={c.photo} sizes="(min-width: 1024px) 25vw, 70vw" />
            <p className="mt-3 text-lg">{c.title}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
        <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visitar a loja virtual</a>
        <a href={links.instagramBrand} target="_blank" rel="noopener noreferrer" className="link">Instagram da Coisas de Maria</a>
      </div>
      {brand.review && <ReviewNote>Conferir categorias com o catálogo atual e links oficiais.</ReviewNote>}
    </StorySection>
  );
}
