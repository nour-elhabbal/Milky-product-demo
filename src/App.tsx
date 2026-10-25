import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import { Header } from "./components";
import { SmoothScroll } from "./components/SmoothScroll";
import { useAssetsReady } from "./hooks/useAssetsReady";
import {
  BenefitsSection,
  FlavoursSection,
  Footer,
  HeroSection,
  InterludeSection,
  NutritionFactsSection,
  TestimonialsSection,
  VideoSection,
} from "./sections";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.config({ ignoreMobileResize: true });

if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
  ScrollTrigger.normalizeScroll(true);
}

const App = () => {
  const isTouch = useMediaQuery({
    query: "(hover: none) and (pointer: coarse)",
  });

  const ready = useAssetsReady();

  useEffect(() => {
    if (ready) ScrollTrigger.refresh();
  }, [ready]);

  useEffect(() => {
    if (isTouch) {
      const lastWidth = window.innerWidth;

      const handleResize = () => {
        const currentWidth = window.innerWidth;
        if (currentWidth === lastWidth || currentWidth < lastWidth + 100)
          return;

        ScrollTrigger.refresh();
        window.location.reload();
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isTouch]);

  return (
    <main>
      {!ready && <Loader />}

      <Header />

      <SmoothScroll enabled={!isTouch} />

      <div id="smooth-wrapper" className="h-full overflow-hidden">
        <div id="smooth-content" className="min-h-full">
          <HeroSection />
          <InterludeSection />
          <FlavoursSection />
          <NutritionFactsSection />
          <BenefitsSection />
          <VideoSection />
          <TestimonialsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
};

const Loader = () => (
  <div className="bg-milk fixed inset-0 z-50 flex items-center justify-center">
    <p className="text-2xl font-bold uppercase">Loading...</p>
  </div>
);

export default App;
