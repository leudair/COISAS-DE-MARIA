import { hero } from "@/content/site";
import { mediaSrc } from "@/content/media";
import { AmbientVideo } from "./AmbientVideo";
import { Photo } from "./Photo";

export function Hero() {
  const videoSrc = mediaSrc({ file: hero.video.file });
  const poster = mediaSrc({ file: hero.video.poster }) ?? mediaSrc(hero.photo);
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-noir pt-16 pb-20 lg:flex lg:min-h-[100svh] lg:items-end lg:pt-0 lg:pb-24">
      {/* Mídia: emoldurada no celular; tela cheia no desktop (Ana à esquerda, texto à direita) */}
      <div className="lg:absolute lg:inset-0">
        <div className="media-frame relative aspect-video !rounded-none lg:h-full lg:w-full lg:aspect-auto">
          {videoSrc || poster ? (
            <AmbientVideo src={videoSrc} poster={poster} label="Vídeo de apresentação da Ana Liz" className="absolute inset-0 h-full w-full" />
          ) : (
            <Photo media={hero.photo} fill priority />
          )}
          <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_30%,rgba(0,0,0,0.7)_58%,#000_88%)] lg:block" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-noir to-transparent" />
        </div>
      </div>
      <div className="container-content relative -mt-6 lg:mt-0 lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2">
          <h1 id="hero-title" className="hero-name whitespace-nowrap font-serif leading-[0.9] tracking-[-0.02em] [font-size:clamp(4.5rem,21vw,9rem)]">
            {hero.title}
          </h1>
          <div className="hero-after">
            <p className="mt-6 font-serif text-[clamp(1.5rem,3vw,2rem)] italic leading-tight">{hero.subtitle}</p>
            <p className="lead muted mt-5 max-w-[40ch]">{hero.text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#historia" className="btn btn-primary">Ler a história</a>
              <a href="#coisas-de-maria" className="btn btn-ghost">Conhecer a Coisas de Maria</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
