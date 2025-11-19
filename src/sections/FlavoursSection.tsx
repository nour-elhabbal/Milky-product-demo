import { FlavoursSectionTitle } from "../components";

export const FlavoursSection = () => {
  return (
    <section className="flavours-section min-h-dvh">
      <div className="flex min-h-dvh flex-row items-center justify-center max-md:flex-col">
        <FlavoursSectionTitle />
      </div>
    </section>
  );
};
