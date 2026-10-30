import { closing, links } from "@/content/site";
import { mediaSrc } from "@/content/media";
import { AmbientVideo } from "./AmbientVideo";

export function Closing() {
  return (
    <section id="encerramento" aria-labelledby="encerramento-title" className="section tone-dark border-t border-white/10">
      <div className="container-content">
        <div className="media-frame relative aspect-video">
          <AmbientVideo
            src={mediaSrc({ file: closing.video.file })}
            poster={mediaSrc({ file: closing.video.poster }) ?? mediaSrc(closing.photo)}
            label="Vídeo: a história de superação da Ana Liz"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <h2 id="encerramento-title" className="heading-lg">{closing.title}</h2>
          <div>
            <p className="lead muted">{closing.text}</p>
            <div className="mt-10 flex flex-col items-start gap-4">
              <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visitar a loja virtual</a>
              <a href={links.instagramAna} target="_blank" rel="noopener noreferrer" className="link mt-2">Seguir a Ana no Instagram</a>
              <a href={links.instagramBrand} target="_blank" rel="noopener noreferrer" className="link">Seguir a Coisas de Maria</a>
            </div>
          </div>
        </div>
        <p className="muted mt-20 font-serif text-xl italic lg:mt-28 lg:text-2xl">{closing.values}</p>
      </div>
    </section>
  );
}
