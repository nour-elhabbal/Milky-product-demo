import ReactPlayer from "react-player";
import { DialogContent } from "./ui/dialog";

export const VideoPlayerDialog = ({
  videoUrl,
  className,
}: {
  videoUrl: string;
  className?: string;
}) => {
  return (
    <DialogContent
      className={`flex max-w-[900px]! items-center justify-center border-0 bg-black/80 p-0 ${className}`}
    >
      {/* Responsive Wrapper */}
      <div className="relative aspect-video min-h-80 w-full rounded-xl">
        <ReactPlayer
          src={videoUrl}
          autoPlay
          controls
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
        />
      </div>
    </DialogContent>
  );
};
