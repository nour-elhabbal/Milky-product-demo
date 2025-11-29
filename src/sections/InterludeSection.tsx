import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const interludeTextStyles = `text-faint-text text-center text-[9rem] max-md:text-[6.5rem] max-sm:text-[4.5rem] leading-none font-bold tracking-[-0.04em] uppercase`;

export const InterludeSection = () => {
  useGSAP(() => {
    const text1splitted = SplitText.create(".interlude-text1", {
      type: "words",
    });

    const text2splitted = SplitText.create(".interlude-text2", {
      type: "words",
    });
    const splittedParagraph = SplitText.create(".interludeParagraph", {
      type: "words, lines",
      linesClass: "overflow-hidden ",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".interludeSection",
        start: "top 60%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    tl.to(text1splitted.words, {
      color: "#faeade",
      stagger: 1,
      duration: 2,
      ease: "power2.out",
    })
      .to(
        ".clippedSentence",
        {
          clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          rotate: 3,
          ease: "power2.inout",
          duration: 10,
        },
        "<=2",
      )
      .to(
        text2splitted.words,
        {
          color: "#faeade",
          stagger: 1,
          duration: 2,
          ease: "power2.out",
        },
        "+=1",
      );

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".interludeParagraph",
        start: "top center",
      },
    });

    paragraphTl.from(splittedParagraph.words, {
      yPercent: 200,
      rotate: 5,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="interludeSection bg-red-brown relative z-20 flex-col justify-center py-20">
      <div className="flex-center mt-12 flex-col">
        <div className={`interlude-text1 ${interludeTextStyles}`}>
          Stir up your <br />
          fearless past and
        </div>
        <div
          className="clippedSentence bg-light-brown text-red-brown border-red-brown relative z-20 -translate-y-5 border-8 px-5 pb-1 text-[9rem] leading-[1.25em] font-bold tracking-tighter uppercase max-md:text-[6.5rem] max-sm:text-[4.5rem]"
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        >
          fuel up
        </div>
        <div
          className={`interlude-text2 ${interludeTextStyles} -translate-y-20`}
        >
          your future with every <br /> gulp of Perfect Protein
        </div>
        <p className="interludeParagraph center text-milk font-paragraph overflow-hidden text-center text-xl max-sm:text-[0.9rem]">
          Rev up your rebel spirit and feed the adventure of <br /> life with
          SPYLT, where you’re one chug away from <br /> epic nostalgia and
          fearless fun.
        </p>
      </div>
    </section>
  );
};
