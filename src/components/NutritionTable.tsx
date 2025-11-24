interface NutritionTableProps {
  nutritionData: {
    name: string;
    concentration: string;
  }[];
  className?: string;
}

export const NutritionTable = ({
  nutritionData,
  className,
}: NutritionTableProps) => {
  return (
    <div
      className={`border-milk-yellow bg-milk flex min-w-fit flex-row gap-[5vw] rounded-full border-10 px-[5vw] py-10 max-md:scale-75 max-sm:scale-60 max-sm:px-10 ${className}`}
    >
      {nutritionData.map((item, index) => (
        <>
          <div
            key={index + item.name}
            className="flex min-h-24 min-w-fit flex-1 flex-col items-center justify-center text-center"
          >
            <span className="font-paragraph text-[clamp(1.2rem,1.2vw)]">
              {item.name}
            </span>
            <span className="text-lighter-dark-brown text-3xl font-bold">
              {item.concentration}
            </span>
          </div>
          {index < nutritionData.length - 1 && (
            <div className="border-mid-brown h-24 w-0 border-l"></div>
          )}
        </>
      ))}
    </div>
  );
};
