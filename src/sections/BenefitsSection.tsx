import { useRef } from "react";
import { ClippedTextBox } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { VideoSection } from "./VideoSection";

export const BenefitsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const children = Array.from(containerRef.current?.children || []);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-clipped-titles-container",
        start: "top 60%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    children.forEach((box) => {
      tl.to(
        `#${box.id}`,

        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 5,
          ease: "power2",
        },
      );
    });
  }, []);

  return (
    <section className="flex-center relative h-dvh min-h-fit w-screen flex-col bg-black max-sm:h-screen">
      <div className="text-milk font-paragraph mt-10 overflow-hidden text-center text-xl max-sm:text-[0.9rem]">
        Unlock the Advantages: <br /> Explore the Key Benefits of Choosing SPYLT
      </div>

      <div
        ref={containerRef}
        className="benefits-clipped-titles-container relative flex w-screen flex-col items-center justify-center pt-10"
      >
        <ClippedTextBox
          id="benefits-1"
          text="Shelf stable"
          className="bg-moka text-milk relative z-2 rotate-2 border-4 border-black"
        />

        <ClippedTextBox
          id="benefits-2"
          text="Protein + Caffeine"
          className="bg-milk -rotate-1 border-4 border-black text-black"
        />

        <ClippedTextBox
          id="benefits-3"
          text="Infinitely recyclable"
          className="bg-reddish-brown text-milk relative z-2 rotate-2 border-4 border-black"
        />

        <ClippedTextBox
          id="benefits-4"
          text="Lactose free"
          className="bg-light-yellow relative z-2 -rotate-3 border-4 border-black text-black"
        />
      </div>

      <div className="relative">
        <VideoSection />
      </div>
    </section>
  );
};
