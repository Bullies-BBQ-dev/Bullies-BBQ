import { NextFont } from "next/dist/compiled/@next/font";
import { ISauce, sauces } from "../_utilities";
import { redRoseFont } from "../layout";
import { Banner } from "../_components";
import { FaPepperHot } from "react-icons/fa";

export default function Sauces() {
  const mapSauces = (sauce: ISauce, index: number) => {
    return (
      <div
        key={index}
        className={`${
          index === sauces.length - 1 && index % 2 === 0 ? "col-span-full" : ""
        } flex flex-col w-full`}
      >
        {sauce.name}
        <span className="text-red-800 text-2xl">{sauce.description}</span>
        <div className="flex justify-center text-red-800">
          {sauce.heat > 0 && <FaPepperHot />}
          {sauce.heat > 1 && <FaPepperHot />}
        </div>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <Banner
        backgroundURL={
          "https://destination-bbq.com/wp-content/uploads/2015/04/Sauces-1024x768.jpg.webp"
        }
        title={"Sauces"}
      />
      <div
        className={`${redRoseFont.className} relative grid md:grid-cols-2 place-items-baseline max-w-screen-lg gap-20 text-3xl text-center border-solid border-4 rounded-2xl py-32 px-16 mt-32`}
      >
        <span
          className={`${redRoseFont.className} absolute top-[-60px] w-full max-h-min sm:text-4xl md:text-6xl text-center`}
        >
          <span className="bg-white px-16">Bullies</span>
          <div>Famous Sauces</div>
        </span>
        {sauces.map(mapSauces)}
        {/* <img
          src="https://www.freeiconspng.com/thumbs/paint-splatter-png/black-paint-splatter-png-2.png"
          alt=""
          className="absolute top-[-60px] left-[-60px]"
        /> */}
      </div>
    </main>
  );
}
