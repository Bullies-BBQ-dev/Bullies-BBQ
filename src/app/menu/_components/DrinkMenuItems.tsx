import { nonAlcoholicDrinks } from "@/app/_utilities";
import { NextFont } from "next/dist/compiled/@next/font";

export function DrinkMenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const mapNonAlcoholicDrinks = (drink: string, index: number) => {
    return (
      <div key={index} className="w-full">
        {drink}
      </div>
    );
  };
  return (
    <div
      className={`${redRoseFont.className} grid md:grid-cols-2 w-full max-w-screen-lg gap-y-5 gap-x-20 text-2xl text-center mb-5 pb-14 h-fell`}
    >
      <span className="col-span-full place-self-center text-5xl py-10">
        Drinks
      </span>
      {nonAlcoholicDrinks.map(mapNonAlcoholicDrinks)}
    </div>
  );
}
