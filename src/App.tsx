import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { Header } from "./components";
import { FlavoursSection, HeroSection, InterludeSection } from "./sections";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
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
          <div className="relative z-15 h-dvh bg-amber-700"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
