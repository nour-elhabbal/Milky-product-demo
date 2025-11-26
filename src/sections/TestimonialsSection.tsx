import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import { VideoCard } from "../components";
import { cards } from "../consts";

export const TestimonialsSection = () => {
  const isMobile = useMediaQuery({ maxWidth: "425px" });

  useGSAP(
    () => {
      if (!isMobile) {
        gsap.set(".testimonialsSection", {
          marginTop: "-100vh",
        });
      }

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

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonialsSection",
          start: "10% top",
          end: "200% top",
          scrub: true,
          pin: true,
        },
      });

      cardsTl.from(".videoCard", {
        yPercent: 200,
        stagger: 0.5,
      });
    },
    { dependencies: [isMobile], revertOnUpdate: true },
  );
  return (
    <section className="testimonialsSection bg-milk relative z-20 h-[120vh] overflow-hidden">
      <div className="absolute flex size-full flex-col items-center justify-center">
        <Heading text="what's" className="testimonialsText1 text-black" />
        <Heading text="everyone" className="text-mid-brown testimonialsText2" />
        <Heading text="talking" className="testimonialsText3 text-black" />
      </div>
      <div className="flex h-full items-center justify-center">
        {cards.map((card) => (
          <VideoCard cardData={card} />
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
