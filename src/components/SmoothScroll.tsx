import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/all";

export const SmoothScroll = ({ enabled }: { enabled: boolean }) => {
  useGSAP(
    () => {
      if (!enabled) return;
      ScrollSmoother.create({ smooth: 3, effects: true });
    },
    { dependencies: [enabled], revertOnUpdate: true },
  );
  return null; // renders nothing, it only runs the effect
};
