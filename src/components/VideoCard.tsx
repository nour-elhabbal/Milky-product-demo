import { useRef } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { VideoPlayerDialog } from "./VideoPlayerDialog";

interface VideoCardProps {
  cardData: {
    src: string;
    rotation: string;
    name: string;
    img: string;
    translation: string | null;
  };
}

export const VideoCard = ({ cardData }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => videoRef.current?.play();

  const handlePause = () => videoRef.current?.pause();

  return (
    <div
      className={`videoCard border-milk relative -ms-35 flex h-[30vw] min-h-112 w-[20vw] min-w-80 flex-none flex-col justify-end overflow-hidden rounded-4xl border-5 first:ms-2 max-xl:absolute max-xl:ms-0 ${cardData.translation} ${cardData.rotation}`}
    >
      <Dialog>
        <DialogTrigger className="cursor-pointer">
          <video
            className="abs-center inset-0 size-full object-cover"
            src={cardData.src}
            ref={videoRef}
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
            muted
            playsInline
            loop
            preload="auto"
          />
          <div className="m-3 flex items-center gap-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <img
                src={cardData.img}
                alt="person-photo"
                className="abs-center inset-0 size-full object-cover"
              />
            </div>
            <div className="text-milk relative z-10 text-xl font-bold tracking-tighter">
              {cardData.name}
            </div>
          </div>
        </DialogTrigger>

        <VideoPlayerDialog videoUrl={cardData.src} />
      </Dialog>
    </div>
  );
};
