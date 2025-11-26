import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { Header } from "./components";
import {
  BenefitsSection,
  FlavoursSection,
  HeroSection,
  InterludeSection,
  NutritionFactsSection,
  TestimonialsSection,
} from "./sections";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <InterludeSection />
          <FlavoursSection />
          <NutritionFactsSection />

          <BenefitsSection />
          <TestimonialsSection />
          <div className="flex-center relative z-15 h-dvh bg-amber-700 text-center text-7xl">
            STILL UNDER DEVELOPMENT
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
