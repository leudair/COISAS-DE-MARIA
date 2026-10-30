import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MusicSection } from "@/components/MusicSection";
import { ChildhoodSection } from "@/components/ChildhoodSection";
import { JourneySection } from "@/components/JourneySection";
import { MirrorSection } from "@/components/MirrorSection";
import { ScarsSection } from "@/components/ScarsSection";
import { FamilySection } from "@/components/FamilySection";
import { MissionSection } from "@/components/MissionSection";
import { BrandSection } from "@/components/BrandSection";
import { Testimonials } from "@/components/Testimonials";
import { VideoSection } from "@/components/VideoSection";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { links, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ana Liz",
  description: site.description,
  sameAs: [links.instagramAna],
  worksFor: { "@type": "Organization", name: "Coisas de Maria", url: links.store, sameAs: [links.instagramBrand] },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <MusicSection />
        <ChildhoodSection />
        <JourneySection />
        <MirrorSection />
        <ScarsSection />
        <FamilySection />
        <MissionSection />
        <BrandSection />
        <Testimonials />
        <VideoSection />
        <Closing />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
