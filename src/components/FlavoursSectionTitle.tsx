import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const FlavoursSectionTitle = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) => {
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
        start: isSmallScreen ? "top 90%" : "top 60%",
        end: isSmallScreen ? "100vh 25%" : "bottom 80%",
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
      },
    });

    tl.from(splittedText1.chars, {
      yPercent: 200,
      stagger: 0.02,
      rotate: 5,
      ease: "power2.out",
    })
      .from(
        ".flavours-clipped-box",
        {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          opacity: 0.5,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5",
      )
      .from(
        splittedText2.chars,
        {
          yPercent: -200,
          opacity: 0,
          stagger: 0.02,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      );
  }, []);

  return (
    <div className="flex min-w-fit shrink-0 flex-col items-center lg:ml-20">
      <h2 className="flavours-title-text1 general-title text-dark-brown overflow-hidden">
        We have 6
      </h2>

      <div
        className="flavours-clipped-box bg-mid-brown border-milk relative z-10 inline-block -rotate-2 border-8 px-3 pb-2"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 99%, 0% 100%)" }}
      >
        <span className="general-title text-milk">Freaking</span>
      </div>

      <h2 className="flavours-title-text2 general-title text-dark-brown leading-20 max-[1025px]:-translate-y-5">
        Delicious Flavors
      </h2>
    </div>
  );
};
