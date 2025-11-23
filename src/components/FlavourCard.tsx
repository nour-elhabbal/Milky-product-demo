interface FlavourCardProps {
  productName: string;
  productImageUrl: string;
  bgUrl: string;
  particlesUrl: string;
  rotation: string;
}

export const FlavourCard = ({
  bgUrl,
  productImageUrl,
  particlesUrl,
  rotation,
  productName,
}: FlavourCardProps) => {
  return (
    <div
      className={`flex h-fit w-[70%] max-w-204 min-w-88 flex-none transform-gpu cursor-pointer flex-col items-center justify-center bg-cover bg-center bg-no-repeat transition-all will-change-transform hover:scale-[1.01] ${rotation} `}
    >
      <img
        src={`${bgUrl}`}
        alt="background"
        className="relative bottom-0 w-full"
      />

      <img
        src={`${productImageUrl}`}
        alt="product image"
        className="absolute bottom-0 w-[54%]"
      />

      <img
        src={`${particlesUrl}`}
        alt="particles"
        className="absolute bottom-0 w-full -translate-y-[30%]"
      />

      <h3 className="text-milk absolute bottom-0 left-0 z-50 mt-4 mb-10 ml-10 text-4xl font-bold uppercase">
        {productName}
      </h3>
    </div>
  );
};
