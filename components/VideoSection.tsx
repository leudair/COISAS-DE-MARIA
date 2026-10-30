import { tone } from "@/content/tones";
import { links, talk } from "@/content/site";
import { mediaSrc } from "@/content/media";
import { ImageGallery } from "./ImageGallery";
import { Photo } from "./Photo";
import { StorySection } from "./StorySection";

/** Vídeo com controles nativos, sem autoplay; carrega só metadados até o play. */
export function VideoSection() {
  const videoSrc = mediaSrc(talk.video);
  return (
    <StorySection from={tone.velvet} to={tone.night} id="palestra" title={talk.title}>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
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
        <div>
          <h3 className="font-serif text-3xl italic lg:text-4xl">{talk.talkName}</h3>
          <p className="lead muted mt-5">{talk.text}</p>
          <a href={links.instagramAna} target="_blank" rel="noopener noreferrer" className="link mt-8 inline-block">
            Acompanhe a Ana no Instagram
          </a>
        </div>
      </div>
      <div className="mt-8 lg:mt-20">
        <ImageGallery items={talk.gallery} mosaic />
      </div>
    </StorySection>
  );
}
