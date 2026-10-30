import { music } from "@/content/site";
import { tone } from "@/content/tones";
import { StorySection } from "./StorySection";
import { YouTubeEmbed } from "./YouTubeEmbed";

/** Clipe com a música da história da Ana, logo depois da abertura. */
export function MusicSection() {
  return (
    <StorySection id="musica" from={tone.noir} to={tone.night} title={music.title} subtitle={music.text}>
      <YouTubeEmbed id={music.youtubeId} title={music.videoTitle} />
      <a href={`https://youtu.be/${music.youtubeId}`} target="_blank" rel="noopener noreferrer" className="link mt-6 inline-block text-base">
        Abrir no YouTube
      </a>
    </StorySection>
  );
}
