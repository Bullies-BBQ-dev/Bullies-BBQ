// "use client";
import React from "react";
import { Category, IMenuItem, menuList } from "@/app/_utilities";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { GrClose } from "react-icons/gr";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export interface MenuItemDetailsProps {
  redRoseFont: NextFont;
  id: number;
  category: Category;
}
export default function MenuItemDetails({
  redRoseFont,
  id,
  category,
}: MenuItemDetailsProps) {
  const currItem = menuList.find(
    (menuItem: IMenuItem) => menuItem.prodId === id
  ) as IMenuItem;
  const router = useRouter();
  const order = {
    sandwiches: 0,
    dinners: 1,
    sides: 2,
    desserts: 3,
    sauces: 4,
    beer: 5,
  };
  const currList = category
    ? menuList.filter((menuItem) => menuItem.category === category)
    : menuList.toSorted((a, b) => order[a.category] - order[b.category]);
  let index = currList.findIndex(
    (menuItem) => menuItem.prodId === currItem.prodId
  );
  const nextOrPrevIndex = (next: boolean) => {
    let nextOrPrevIndex: number = next
      ? (index + 1) % currList.length
      : (index - 1 + currList.length) % currList.length;
    return nextOrPrevIndex;
  };

  return (
    <section
      key={id}
      id="menu-item-details"
      className="fixed inset-0 bg-black/90 grid place-items-center z-50 p-4 max-h-screen"
      onClick={(e) => {
        if (
          e.target instanceof HTMLElement &&
          e.target.id === "menu-item-details"
        )
          router.push(`/menu${category ? "?category=" + category : ""}`, {
            scroll: false,
          });
      }}
    >
      <div className="max-h-full max-w-screen-xl bg-white rounded-md grid lg:place-items-center overflow-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 animate-fade-in-200 text-center place-items-center">
          <div className="col-span-full w-full grid grid-cols-3 lg:mb-6">
            <Link
              href={`/menu${category ? "?category=" + category : ""}`}
              scroll={false}
              className="p-2 sm:p-1 w-fit h-fit"
            >
              <button className="bg-red-800 py-1 text-white px-2 sm:px-0 sm:py-2 sm:pr-2 flex rounded items-center">
                <HiMiniChevronLeft size={35} />
                <span className="hidden sm:flex">Back to Menu</span>
              </button>
            </Link>
            <img
              src="/Bullies-logo.png"
              alt="Bullies-BBQ"
              className={`w-20 place-self-center`}
            />
            <Link
              href={`/menu${category ? "?category=" + category : ""}`}
              scroll={false}
              className="p-1 place-self-end self-start"
            >
              <button className="p-2 hover:bg-gray-300 duration-150 rounded">
                <GrClose size={40} />
              </button>
            </Link>
          </div>

          <div className="p-1 lg:p-10">
            <img
              src={currItem.img}
              alt=""
              className="rounded-md shadow-md animate-fade-in aspect-[4/3] h-72 md:h-[375px] lg:h-[425px] object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-between h-full w-full max-w-screen-sm p-2 sm:p-10 relative animate-fade-in">
            <div className="w-full h-full flex flex-col justify-between p-2">
              <span
                className={`${
                  redRoseFont.className
                } text-4xl sm:text-5xl pb-2 ${
                  currItem.name === "Bull Dog\n(2 Meat Combo)"
                    ? "whitespace-pre"
                    : ""
                }`}
              >
                {currItem.name}
              </span>

              {currItem.category === "sandwiches" ? (
                <div
                  className={`${redRoseFont.className} flex flex-wrap justify-around sm:flex-col py-2 sm:gap-y-4 text-2xl sm:text-3xl sm:w-full`}
                >
                  <div className="flex justify-around w-full mb-1 sm:mb-0 sm:block">
                    <div className="flex flex-col sm:flex-row justify-between sm:pb-1 sm:px-24">
                      Regular
                      <span>${currItem.price}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between sm:px-24">
                      Jumbo
                      <span>${currItem.price + 2}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full px-2 text-xl sm:text-2xl sm:px-6">
                    <span className=" text-start">
                      Combo Your Sandwich
                      <br />2 Sides & Drink
                    </span>
                    <span>+$4.50</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`${redRoseFont.className} text-3xl grow grid place-items-center`}
                >
                  ${currItem.price}
                </div>
              )}
              {currItem.category === "dinners" && (
                <span
                  className={`${redRoseFont.className} text-xl sm:text-2xl`}
                >
                  - All Dinners Include 2 Sides -
                </span>
              )}
            </div>
            <div className="w-full h-full flex flex-col justify-between">
              <p>{currItem.description}</p>
              <Link
                href={
                  currItem.url
                    ? currItem.url
                    : "https://order.toasttab.com/online/bullies-bbq"
                }
                target="_blank"
                className={`h-20 lg:right-1 xl:right-4 2xl:right-12 hover:scale-110 animate-fade-in duration-200 py-3 
            `}
              >
                <button
                  className={
                    redRoseFont.className +
                    " py-3 px-16 max-w-fit bg-red-800 border-4 border-red-800 text-white text-2xl tracking-wide rounded hover:outline-8 hover:outline-red-800 hover:bg-white/80 hover:text-red-800 duration-300"
                  }
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>

          <div
            id="next-or-prev-buttons"
            className="bg-white col-span-full grid grid-cols-2 gap-1 relative pb-4 w-full"
          >
            <Link
              className="bg-gray-100 sm:place-self-end w-full h-20 sm:w-60 flex items-center"
              href={`/menu?${
                category ? "category=" + category + "&" : ""
              }show=${currList[nextOrPrevIndex(false)].prodId}`}
              scroll={false}
            >
              <HiMiniChevronLeft size={25} />
              <button className={`${redRoseFont.className} w-full h-full py-4`}>
                {currList[nextOrPrevIndex(false)].name}{" "}
              </button>
            </Link>
            <Link
              className="bg-gray-100 sm:place-self-start w-full h-20 sm:w-60 flex items-center"
              href={`/menu?${
                category ? "category=" + category + "&" : ""
              }show=${currList[nextOrPrevIndex(true)].prodId}`}
              scroll={false}
            >
              <button className={`${redRoseFont.className} w-full h-full py-4`}>
                {currList[nextOrPrevIndex(true)].name}{" "}
              </button>
              <HiMiniChevronRight size={25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
