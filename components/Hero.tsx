import { hero } from "@/content/site";
import { mediaSrc } from "@/content/media";
import { AmbientVideo } from "./AmbientVideo";
import { Particles } from "./Particles";
import { PauseOffscreen } from "./PauseOffscreen";
import { Photo } from "./Photo";

export function Hero() {
  const letters = hero.title.split("");
  const videoSrc = mediaSrc({ file: hero.video.file });
  const poster = mediaSrc({ file: hero.video.poster }) ?? mediaSrc(hero.photo);

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-black pt-16 pb-16 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-12 lg:pb-12">
      {/* Mídia: emoldurada no celular; tela cheia no desktop (Ana à esquerda, texto à direita) */}
      <div className="px-5 sm:px-8 lg:absolute lg:inset-0 lg:px-0">
        <div className="media-frame relative aspect-video lg:h-full lg:w-full lg:rounded-none lg:aspect-auto lg:shadow-none">
          {videoSrc || poster ? (
            <AmbientVideo src={videoSrc} poster={poster} label="Vídeo de apresentação da Ana Liz" className="absolute inset-0 h-full w-full" />
          ) : (
            <Photo media={hero.photo} fill priority />
          )}
          <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_25%,rgba(0,0,0,0.75)_55%,#000_85%)] lg:block" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-black to-transparent lg:block" />
        </div>
      </div>

      <PauseOffscreen className="pointer-events-none absolute inset-0">
        <div aria-hidden className="glow -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-pink/20 lg:left-[75%]" />
        <Particles count={14} />
      </PauseOffscreen>

      <div className="container-content relative mt-10 lg:mt-0 lg:grid lg:grid-cols-2">
        <div className="text-center lg:col-start-2 lg:text-left">
          <h1 id="hero-title" className="text-3d font-black leading-[0.95] tracking-[-0.03em] [font-size:clamp(3.5rem,17vw,6rem)] [perspective:600px]">
            {letters.map((l, i) => (
              <span key={i} className="name-letter" style={{ animationDelay: `${150 + i * 80}ms` }} aria-hidden>
                {l === " " ? "\u00A0" : l}
              </span>
            ))}
            <span className="sr-only">{hero.title}</span>
          </h1>
          <p className="mt-4 text-[clamp(1.375rem,5vw,2rem)] font-extrabold text-pink">{hero.subtitle}</p>
          <p className="lead mx-auto mt-5 max-w-[36ch] lg:mx-0">{hero.text}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#historia" className="btn btn-primary">Conheça minha história</a>
            <a href="#coisas-de-maria" className="btn btn-ghost bg-black/40 backdrop-blur">Conheça a Coisas de Maria</a>
          </div>
        </div>
      </div>
    </section>
  );
}
