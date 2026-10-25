import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import { VideoCard } from "../components";
import { cards } from "../consts";

export const TestimonialsSection = () => {
  const isTouch = useMediaQuery({
    query: "(hover: none) and (pointer: coarse)",
  });
  const isMobile = useMediaQuery({ maxWidth: 766 });

  useGSAP(
    () => {
      // "svh" = small viewport height: it does NOT change when the phone's
      // URL bar collapses, so the layout stops shifting while scrolling.
      if (!isMobile) {
        gsap.set(".testimonialsSection", {
          marginTop: isTouch ? "-80svh" : "-100svh",
        });
      } else {
        gsap.set(".testimonialsSection", {
          marginTop: 0,
        });
      }

      // Heading words sliding sideways (unchanged)
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonialsSection",
          scrub: 1.5,
          start: "-20% 50%",
          end: "200% top",
        },
      });

      headingTl
        .to(".testimonialsText1", {
          xPercent: 70,
        })
        .to(
          ".testimonialsText2",
          {
            xPercent: 10,
          },
          "<",
        )
        .to(
          ".testimonialsText3",
          {
            xPercent: -50,
          },
          "<",
        );

      // Pinned section where the cards slide up
      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonialsSection",
          start: "10% top",
          end: "200% top",
          scrub: 0.5, // was `true`: a small catch-up delay smooths out touch scrolling
          pin: true,
          anticipatePin: 1, // prepares the pin slightly early to reduce the jump
          invalidateOnRefresh: true,
        },
      });

      cardsTl.from(".videoCard", {
        yPercent: 200,
        stagger: 0.5,
      });
    },
    // isMobile added: the margin logic above depends on it, so the
    // animation must be rebuilt when it changes
    { dependencies: [isTouch, isMobile], revertOnUpdate: true },
  );

  return (
    <section className="testimonialsSection bg-milk relative z-20 h-[120svh] overflow-hidden">
      <div className="absolute flex size-full flex-col items-center justify-center">
        <Heading text="what's" className="testimonialsText1 text-black" />
        <Heading text="everyone" className="text-mid-brown testimonialsText2" />
        <Heading text="talking" className="testimonialsText3 text-black" />
      </div>
      <div className="flex h-full items-center justify-center">
        {cards.map((card) => (
          <VideoCard key={card.name} cardData={card} />
        ))}
      </div>
    </section>
  );
};

const Heading = ({ text, className }: { text: string; className: string }) => {
  return (
    <h1
      className={`${className} ml-[2vw] text-[19vw] leading-[105%] font-bold tracking-[-.4vw] uppercase`}
    >
      {text}
    </h1>
  );
};
