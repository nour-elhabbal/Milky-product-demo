import { useEffect, useState } from "react";

const waitFor = (el: HTMLElement, doneEvent: string, isDone: boolean) =>
  isDone
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        el.addEventListener(doneEvent, () => resolve(), { once: true });
        el.addEventListener("error", () => resolve(), { once: true });
      });

export const useAssetsReady = (timeoutMs = 8000) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images = [...document.images].map((img) =>
      waitFor(img, "load", img.complete)
        .then(() => img.decode())
        .catch(() => {}),
    );

    const videos = [...document.querySelectorAll("video")].map((v) =>
      waitFor(v, "loadedmetadata", v.readyState >= 1),
    );

    const allLoaded = Promise.all([document.fonts.ready, ...images, ...videos]);
    const timeout = new Promise((resolve) => setTimeout(resolve, timeoutMs));

    Promise.race([allLoaded, timeout]).then(() => setReady(true));
  }, [timeoutMs]);

  return ready;
};
