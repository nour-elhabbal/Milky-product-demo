import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ensure the video freezes at the final frame
  const handleVideoEnd = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    vid.currentTime = vid.duration;
  };

  useGSAP(() => {
    const titleSplit = SplitText.create(".heroContent h1", { type: "chars" });

    const tl = gsap.timeline({
      delay: 1.3,
    });

    tl.to(".heroContent", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".clipped-box",
        {
          clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power2.out",
          duration: 1,
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          opacity: 1,
          yPercent: 200,
          stagger: 0.03,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroContainer",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".heroContainer", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power",
    });
  }, []);

  return (
    <section className="bg-main-bg">
      <div className="heroContainer bg-milk text-dark-brown h-dvh w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        />
        <div className="heroContent relative z-10 flex h-full translate-y-10 flex-col items-center justify-center opacity-0">
          <h1 className="overflow-hidden text-center text-[7rem] leading-none font-bold tracking-tight uppercase max-md:text-[6rem] max-sm:text-[3.4rem]">
            Milky Featuring
          </h1>

          <div
            className="clipped-box bg-mid-brown border-milk mt-1 -rotate-1 border-[5px] p-2 text-white"
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          >
            <h2 className="text-[6rem] font-extrabold tracking-tight uppercase max-md:text-[4.8rem] max-sm:text-[2.4rem]">
              spylt milk products
            </h2>
          </div>

          <p className="font-paragraph mt-10 max-w-xl text-center text-sm leading-relaxed sm:text-base">
            Live life to the fullest with SPYLT. Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </p>

          <button className="bg-light-brown mt-8 rounded-full px-20 py-6 font-sans text-lg font-semibold tracking-wide transition hover:brightness-110">
            CHUG THE SPYLT
          </button>
        </div>
      </div>
    </section>
  );
};
