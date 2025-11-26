import { NutritionTable } from "../components";
import { nutritionData } from "../consts";

export const NutritionFactsSection = () => {
  return (
    <section className="bg-milk-yellow relative mt-30 min-h-dvh">
      <img
        src="/images/slider-dip.png"
        alt="nutrition facts bg"
        className="relative top-0 w-full object-cover"
      />

      <div className="relative z-10 flex min-h-dvh flex-col items-center">
        <div className="left-0 mt-30 flex flex-col gap-10 max-md:absolute">
          <div className="absolute top-60 left-0 mx-10 max-md:relative max-md:top-[unset] max-md:left-[unset]">
            <h2 className="general-title text-dark-brown overflow-hidden">
              It still does
            </h2>

            <div
              className="flavours-clipped-box bg-mid-brown border-milk relative z-10 inline-block -rotate-2 border-8 px-3 pb-2"
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 99%, 0% 100%)" }}
            >
              <span className="general-title text-milk">body good</span>
            </div>
          </div>

          <div className="text font-paragraph absolute top-50 right-0 mx-10 overflow-hidden text-right text-xl max-md:relative max-md:top-[unset] max-md:right-[unset] max-md:text-left max-sm:text-[0.9rem]">
            Milk contains a wide array of <br /> nutrients, including vitamins,
            minerals, <br /> and protein, and this is lactose free
          </div>
        </div>

        <div className="absolute bottom-0">
          <NutritionTable nutritionData={nutritionData} className="my-10" />
        </div>
      </div>

      <img
        src="/images/big-img.png"
        alt="nutrition facts bg"
        className="absolute bottom-0 w-full object-cover max-md:h-1/2 max-md:scale-125"
      />
    </section>
  );
};
