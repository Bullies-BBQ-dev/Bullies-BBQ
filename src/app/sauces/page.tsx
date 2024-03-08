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
          {sauce.heat > 0 && (
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/214/961/original/red-chili-red-chili-transparent-background-ai-generated-free-png.png"
              className="max-w-[4rem]"
            />
          )}
          {sauce.heat > 1 && (
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/214/961/original/red-chili-red-chili-transparent-background-ai-generated-free-png.png"
              className="max-w-[4rem]"
            />
          )}
        </div>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center pb-20 ">
      <Banner backgroundURL={"/banner/sauces.jpg"} title={"Sauces"} />
      <div
        className={`${redRoseFont.className} bg-[url('https://static.basicinvite.com/media/bi/33703/woodgrain-cottage-wallpaper-2x.jpg?q=1683830497')]  bg-cover bg-no-repeat	 relative grid md:grid-cols-2 place-items-baseline max-w-screen-lg gap-20 text-3xl text-center border-solid border-4 rounded-2xl py-20 px-16 mt-32 `}
      >
        <span
          className={`${redRoseFont.className} col-span-full w-full max-h-min sm:text-4xl md:text-6xl text-center `}
        >
          <div>
            Bullies <br />
            Famous Sauces
          </div>
        </span>
        {sauces.map(mapSauces)}
        {/* <img
          src="https://freepngimg.com/save/171025-sauce-red-download-hd/1139x876"
          alt=""
          className="absolute top-[-50px] left-[-55px] max-w-[15rem]"
        /> */}
      </div>
    </main>
  );
}
