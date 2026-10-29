import { brand, links } from "@/content/site";
import { Logo } from "./Logo";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";

export function BrandSection() {
  return (
    <section id="coisas-de-maria" aria-labelledby="coisas-de-maria-title" className="section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Capítulo 07 · A marca</p>
          <div className="mt-6 flex justify-center">
            <Logo className="scale-125" />
          </div>
          <h2 id="coisas-de-maria-title" className="heading-xl text-3d mt-6 text-pink">
            {brand.title}
          </h2>
          <p className="lead mt-4 font-semibold text-snow">{brand.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Photo media={brand.storePhoto} />
          </Reveal>
          <div>
            {brand.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="lead mb-5">{p}</p>
              </Reveal>
            ))}
            <ul className="mt-8 grid gap-3">
              {brand.differentials.map((d, i) => (
                <Reveal as="li" key={d.title} delay={i * 80} className="card p-5">
                  <h3 className="font-extrabold text-blush">{d.title}</h3>
                  <p className="mt-1 text-ash">{d.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel mt-20 lg:mt-28">
        <h3 className="text-center text-2xl font-extrabold lg:text-[40px] lg:leading-tight">Nossas categorias</h3>
        <ul className="no-scrollbar -mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-6">
          {brand.categories.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90} className="w-[72%] flex-none snap-start sm:w-auto">
              <div className="card overflow-hidden p-2">
                <Photo media={c.photo} className="!rounded-[20px]" sizes="(min-width: 1024px) 25vw, 70vw" />
                <p className="px-3 pt-4 pb-3 text-lg font-extrabold">{c.title}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conheça nossa loja</a>
          <a href={links.products} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Veja nossos produtos</a>
          <a href={links.instagramBrand} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Visite nosso Instagram</a>
        </div>
        {brand.review && (
          <div className="text-center">
            <ReviewNote>Conferir categorias com o catálogo atual e links oficiais.</ReviewNote>
          </div>
        )}
      </div>
    </section>
  );
}
