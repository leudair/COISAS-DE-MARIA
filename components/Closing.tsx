import { closing, links } from "@/content/site";
import { Particles } from "./Particles";
import { PauseOffscreen } from "./PauseOffscreen";
import { Reveal } from "./Reveal";

export function Closing() {
  return (
    <section id="encerramento" aria-labelledby="encerramento-title" className="section relative overflow-hidden">
      <PauseOffscreen className="absolute inset-0">
        <div aria-hidden className="glow left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 bg-pink/20" />
        <Particles count={10} />
      </PauseOffscreen>
      <div className="container-content relative text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 id="encerramento-title" className="heading-xl text-3d-soft">{closing.title}</h2>
          <p className="lead mx-auto mt-6 max-w-[52ch]">{closing.text}</p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a href={links.instagramBrand} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conheça a Coisas de Maria</a>
          <a href={links.instagramAna} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Acompanhe minha história</a>
          <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Visite nossa loja virtual</a>
        </Reveal>

        <ul aria-label="Valores" className="mt-16 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-black tracking-[0.14em] text-ash lg:text-base">
          {closing.values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
