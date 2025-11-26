interface ClippedTextBoxProps {
  text: string;
  textColor?: "black" | "milk" | "transparent";
  bgColor?: string;
  initiallyClosed?: boolean;
  className?: string;
  id?: string;
}

export const ClippedTextBox = ({
  text,
  initiallyClosed = true,
  className = "",
  id = "",
}: ClippedTextBoxProps) => {
  return (
    <div
      className={`px-5 py-2 ${className}`}
      id={id}
      style={{
        clipPath: initiallyClosed
          ? "polygon(50% 0, 50% 0, 52% 100%, 52% 100%)"
          : "unset",
      }}
    >
      <span className={`general-title max-[420px]:text-[2.3rem]!`}>{text}</span>
    </div>
  );
};
