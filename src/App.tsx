import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { Header } from "./components";
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
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const isTouch = useMediaQuery({
    query: "(hover: none) and (pointer: coarse)",
  });

  useEffect(() => {
    if (isTouch) {
      const handleResize = () => {
        ScrollTrigger.refresh();
        window.location.reload();
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isTouch]);

  useGSAP(
    () => {
      if (!isTouch) {
        ScrollSmoother.create({
          smooth: 3,
          effects: true,
        });
      }
    },
    { dependencies: [isTouch], revertOnUpdate: true },
  );

  return (
    <main>
      <Header />
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

export default App;
