import { NextFont } from "next/dist/compiled/@next/font";
import { ISauce, sauces } from "../_utilities";
import { Banner } from "../_components";
import { FaPepperHot } from "react-icons/fa";
import { Red_Rose } from "next/font/google";
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});

export default function Sauces() {
  const mapSauces = (sauce: ISauce, index: number) => {
    return (
      <div
        key={index}
        className="flex w-[250px] sm:w-[350px] lg:w-[400px] justify-center flex-col bg-white rounded shadow-lg p-5 gap-2"
      >
        <div className="flex justify-center">
          <h2>{sauce.name}</h2>
          <span className="flex text-red-800 pl-2">
            {sauce.heat > 0 && (
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/214/961/original/red-chili-red-chili-transparent-background-ai-generated-free-png.png"
                alt="hot pepper"
                className="max-w-[2rem] sm:max-w-[3rem]"
              />
            )}
            {sauce.heat > 1 && (
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/214/961/original/red-chili-red-chili-transparent-background-ai-generated-free-png.png"
                alt="hot pepper"
                className="max-w-[2rem] sm:max-w-[3rem]"
              />
            )}
          </span>
        </div>
        <p className="text-red-800 text-base sm:text-2xl lg:text-3xl">
          {sauce.description}
        </p>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen min-w-60 flex-col items-center pb-20">
      <Banner backgroundURL={"/banner/sauces.jpg"} title={"Sauces"} />
      <div
        className={`${redRoseFont.className} bg-[url('https://static.basicinvite.com/media/bi/33703/woodgrain-cottage-wallpaper-2x.jpg?q=1683830497')]  bg-cover bg-no-repeat	max-w-screen-lg text-xl sm:text-3xl lg:text-4xl text-center border-solid py-10 sm:py-20 border-4 rounded mt-20 mx-5 lg:mx-10`}
      >
        <h1
          className={`${redRoseFont.className} w-[235px] sm:w-[375px] lg:w-[465px] mx-auto text-3xl sm:text-5xl lg:text-6xl pb-5 sm:pb-10 lg:pb-20`}
        >
          Bullies <br />
          Famous Sauces
        </h1>

        <div className="flex gap-4 sm:gap-8 px-3 sm:px-5 justify-center flex-wrap w-full">
          {sauces.map(mapSauces)}
          {/* <img
          src="https://freepngimg.com/save/171025-sauce-red-download-hd/1139x876"
          alt=""
          className="absolute top-[-50px] left-[-55px] max-w-[15rem]"
        /> */}
        </div>
      </div>
    </main>
  );
}
