import { links, talk } from "@/content/site";
import { mediaSrc } from "@/content/media";
import { ImageGallery } from "./ImageGallery";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { ReviewNote } from "./ReviewNote";
import { StorySection } from "./StorySection";

/** Vídeo com controles nativos, sem autoplay; carrega só metadados até o play. */
export function VideoSection() {
  const videoSrc = mediaSrc(talk.video);
  return (
    <StorySection id="palestra" number="09" title={talk.title} className="overflow-hidden">
      <div aria-hidden className="glow -top-20 right-0 h-[360px] w-[360px] bg-pink/15" />
      <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal>
          {videoSrc ? (
            <div className="media-frame aspect-video">
              <video
                className="h-full w-full object-cover"
                src={videoSrc}
                poster={mediaSrc(talk.video.poster)}
                controls
                preload="metadata"
                playsInline
                aria-label={`Vídeo da palestra ${talk.talkName}`}
              />
            </div>
          ) : (
            <Photo media={{ ...talk.video.poster, needed: "Vídeo da palestra (MP4) e foto de capa" }} className="!aspect-video" />
          )}
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blush">Palestra</p>
          <h3 className="mt-2 text-3xl font-black text-pink lg:text-4xl">{talk.talkName}</h3>
          <p className="lead mt-5">{talk.text}</p>
          <a href={links.instagramAna} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8">
            Acompanhe a Ana no Instagram
          </a>
          {talk.review && <ReviewNote />}
        </Reveal>
      </div>
      <div className="mt-14 lg:mt-20">
        <ImageGallery items={talk.gallery} />
      </div>
    </StorySection>
  );
}
