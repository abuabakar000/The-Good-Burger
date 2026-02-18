import Hero from "../components/Hero";
import UnderHeroSection from "../components/UnderHeroSection";
import QualitySection from "../components/QualitySection";
import TripleVideoSection from "../components/TripleVideoSection";

import Highlights from "../components/Highlights";

export default function Home() {
  return (
    <>
      <Hero />
      <UnderHeroSection />
      <Highlights />
      <QualitySection />
      <TripleVideoSection />
    </>
  );
}
