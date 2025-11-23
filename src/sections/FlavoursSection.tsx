import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FlavourCard, FlavoursSectionTitle } from "../components";
import { productsList } from "../consts";
import { useMediaQuery } from "react-responsive";

export const FlavoursSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1025 });

  useGSAP(
    () => {
      if (!isSmallScreen) {
        const scrollAmount =
          (sectionRef.current?.scrollWidth ?? 0) - window.innerWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".flavours-section",
            start: "top 2%",
            end: `+=${scrollAmount}px `,
            pin: true,
            scrub: true,
          },
        });

        tl.to(".flavours-section", {
          x: `-${scrollAmount}px`,
          ease: "none",
        });
      }
    },
    { dependencies: [isSmallScreen], revertOnUpdate: true },
  );

  return (
    <section ref={sectionRef} className="flavours-section">
      <div className="flex min-h-dvh flex-row items-center gap-50 py-10 max-[1025px]:flex-col max-[1025px]:gap-24">
        <FlavoursSectionTitle isSmallScreen={isSmallScreen} />

        <div className="flex w-full gap-40 max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:justify-center max-[1025px]:pb-20">
          {productsList.map((product) => (
            <FlavourCard
              key={product.name}
              bgUrl={product.bgUrl}
              productName={product.name}
              particlesUrl={product.particlesUrl}
              productImageUrl={product.productImageUrl}
              rotation={product.rotation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
