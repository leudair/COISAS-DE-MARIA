import { hero } from "@/content/site";
import { Photo } from "./Photo";
import { Particles } from "./Particles";
import { PauseOffscreen } from "./PauseOffscreen";

export function Hero() {
  const letters = hero.title.split("");

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-black pt-20 pb-16 lg:min-h-[100svh] lg:pt-28 lg:pb-24">
      <PauseOffscreen className="absolute inset-0">
        {/* Fundo cinematográfico independente da foto. Pode ser substituído por vídeo do Flow (sem áudio). */}
        <div aria-hidden className="absolute inset-0">
          <div className="glow -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-pink/25 lg:left-[70%] lg:h-[620px] lg:w-[620px]" />
          <div className="glow bottom-0 -left-20 h-[320px] w-[320px] bg-blush/10 [animation-delay:-6s]" />
        </div>
        <Particles count={16} />
      </PauseOffscreen>

      <div className="container-content relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:order-2 lg:max-w-none">
          <Photo media={hero.photo} priority sizes="(min-width: 1024px) 45vw, 90vw" />
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1 id="hero-title" className="text-3d font-black leading-[0.95] tracking-[-0.03em] [font-size:clamp(3.5rem,17vw,6rem)] [perspective:600px]">
            {letters.map((l, i) => (
              <span key={i} className="name-letter" style={{ animationDelay: `${150 + i * 80}ms` }} aria-hidden>
                {l === " " ? " " : l}
              </span>
            ))}
            <span className="sr-only">{hero.title}</span>
          </h1>
          <p className="mt-4 text-[clamp(1.375rem,5vw,2rem)] font-extrabold text-pink">{hero.subtitle}</p>
          <p className="lead mx-auto mt-5 max-w-[36ch] lg:mx-0">{hero.text}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#historia" className="btn btn-primary">Conheça minha história</a>
            <a href="#coisas-de-maria" className="btn btn-ghost">Conheça a Coisas de Maria</a>
          </div>
        </div>
      </div>
    </section>
  );
}
