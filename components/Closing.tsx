import { closing, links } from "@/content/site";
import { mediaSrc } from "@/content/media";
import { tone } from "@/content/tones";
import { AmbientVideo } from "./AmbientVideo";
import { bandStyle } from "./StorySection";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export function Closing() {
  return (
    <section id="encerramento" aria-labelledby="encerramento-title" className="section" style={bandStyle(tone.night, tone.noir)}>
      <div className="container-content">
        <div className="media-frame relative aspect-video">
          <AmbientVideo
            src={mediaSrc({ file: closing.video.file })}
            poster={mediaSrc({ file: closing.video.poster }) ?? mediaSrc(closing.photo)}
            label="Vídeo: a história de superação da Ana Liz"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="mt-8 grid gap-6 lg:mt-24 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <h2 id="encerramento-title" className="heading-lg">{closing.title}</h2>
          <div>
            <p className="lead muted">{closing.text}</p>
            <div className="mt-10 flex flex-col items-start gap-4">
              <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visitar a loja virtual</a>
              <a href={links.instagramAna} target="_blank" rel="noopener noreferrer" className="btn btn-ghost gap-3">
                <InstagramIcon /> Seguir a Ana no Instagram
              </a>
              <a href={links.instagramBrand} target="_blank" rel="noopener noreferrer" className="btn btn-ghost gap-3">
                <InstagramIcon /> Seguir a Coisas de Maria
              </a>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost gap-3">
                <WhatsAppIcon /> Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="muted mt-12 font-serif text-xl italic lg:mt-28 lg:text-2xl">{closing.values}</p>
      </div>
    </section>
  );
}
