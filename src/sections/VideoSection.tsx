import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const VideoSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      if (!isSmallScreen) {
        gsap.to(".videoMask", {
          scrollTrigger: {
            trigger: ".videoSection",
            start: "top 28%",
            end: "bottom 100%",
            scrub: 1.5,
          },
          top: 0,
          delay: 0,
          ease: "power2",
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".videoSection",
            start: "top top",
            end: "+=300% top",
            pin: true,
            scrub: 2,
          },
        });
        tl.to(".videoMask", {
          clipPath: "circle(100% at 50% 50%)",
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [isSmallScreen], revertOnUpdate: true },
  );

  return (
    <section className="videoSection relative h-dvh overflow-hidden bg-black">
      <div
        className="videoMask relative -top-70 h-[105vh] w-screen max-md:top-20"
        style={{
          clipPath: isSmallScreen ? "unset" : "circle(5.5% at 50% 50%)",
        }}
      >
        <video
          className="abs-center inset-0 size-full object-cover"
          src="/videos/pin-video.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        />
        <div className="abs-center scale-200 md:scale-100">
          <img
            src="/images/circle-text.svg"
            className="spin-circle max-md:scale-50"
          />
          <div className="abs-center">
            <img src="/images/play.svg" className="ml-[.5vw] size-[3vw]" />
          </div>
        </div>
      </div>
    </section>
  );
};
