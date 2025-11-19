import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const FlavoursSectionTitle = () => {
  useGSAP(() => {
    const splittedText1 = SplitText.create(".flavours-title-text1", {
      type: " chars",
    });
    const splittedText2 = SplitText.create(".flavours-title-text2", {
      type: " chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavours-section",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.from(splittedText1.chars, {
      yPercent: 200,
      stagger: 0.3,
      duration: 5,
      ease: "power2.out",
    })
      .from(
        ".flavours-clipped-box",
        {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0.5,
          duration: 10,
          ease: "power2.out",
        },
        "<=2",
      )
      .from(
        splittedText2.chars,
        {
          yPercent: -200,
          opacity: 0,
          stagger: 0.2,
          duration: 5,
          ease: "power2.out",
        },
        "<",
      );
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center">
      <h2 className="flavours-title-text1 general-title text-dark-brown overflow-hidden">
        We have 6
      </h2>

      {/* FREAKING block */}
      <div
        className="flavours-clipped-box bg-mid-brown border-milk relative z-10 inline-block -rotate-2 border-8 px-3 pb-2"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 99%, 0% 100%)" }}
      >
        <span className="general-title text-milk">Freaking</span>
      </div>

      <h2 className="flavours-title-text2 general-title text-dark-brown leading-20">
        Delicious Flavors
      </h2>
    </div>
  );
};
