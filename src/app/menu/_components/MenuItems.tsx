"use client";

import { Category, IMenuItem } from "@/app/_utilities";
import { useRef, useState } from "react";
import { menuList, categories } from "@/app/_utilities";
import { NextFont } from "next/dist/compiled/@next/font";
import { CategoryIcons } from ".";
import Link from "next/link";
import { MenuItemDetails } from "./MenuItemDetails";
import { useSearchParams } from "next/navigation";
import { GrClose } from "react-icons/gr";

export function MenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const [currentCategory, setCurrentCategory] = useState<Category>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const show = useSearchParams().get("show");

  const mapMenu = (category: Category, index: number) => {
    return (
      <div key={index} className="flex flex-col">
        <span
          className={`${redRoseFont.className} text-5xl text-center underline`}
        >
          {category}
        </span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-9 max-w-screen-2xl py-10 mx-2">
          {menuList
            .filter((menuIem) => menuIem.category === category)
            .map(mapMenuItems)}
        </div>
      </div>
    );
  };
  const mapMenuItems = (menuItem: IMenuItem, index: number) => {
    return (
      <Link
        href={`/menu?show=${menuItem.prodId}`}
        className="flex flex-col rounded-lg group hover:scale-[1.02] shadow-xl hover:shadow-gray-400 hover:shadow-2xl min-w-72 duration-500"
        key={index}
        scroll={false}
      >
        <img
          src={menuItem.img}
          alt={menuItem.name}
          className="rounded-t-lg aspect-[4/3] object-cover"
        />
        <div className="flex flex-col h-full p-3">
          <div className="flex justify-between pb-3 group-hover:text-red-800 duration-500">
            <span className={`${redRoseFont.className} text-3xl`}>
              {menuItem.name}
            </span>
            <span className={`${redRoseFont.className} text-3xl`}>
              ${menuItem.price}
            </span>
          </div>
          <p className=" line-clamp-3">{menuItem.description}</p>
        </div>
      </Link>
    );
  };

  const mapCategoryButtons = (category: Category, index: number) => {
    return (
      <button
        key={index}
        className={`py-1 rounded border-4 border-red-800 relative duration-300 hover:bg-white hover:text-red-800 grid place-items-center ${
          category === currentCategory
            ? "bg-white text-red-800"
            : "bg-red-800 text-white"
        }`}
        onClick={() => {
          if (category === currentCategory) setCurrentCategory(null);
          else setCurrentCategory(category);
          // menuRef.current?.scrollTo(0, 0);
          menuRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="hidden sm:flex items-center">
          {category}
          {category === currentCategory && (
            <GrClose className="absolute right-0 mr-2" />
          )}
        </span>

        <CategoryIcons category={category}></CategoryIcons>
      </button>
    );
  };

  return (
    <section ref={menuRef} className="mx-2 sm:mx-5 min-h-screen">
      <div className="grid grid-cols-6 gap-2 sm:gap-2 md:gap-4 px-1 md:px-8 lg:px-16 py-4 sticky top-[72px] sm:top-20 z-10 bg-white shadow-md duration-200 mb-24">
        {categories.map(mapCategoryButtons)}
      </div>
      <div
        className="relative animate-fade-left-right "
        style={{ gridColumnGap: "4%" }}
        key={currentCategory}
      >
        {currentCategory
          ? categories
              .filter((category) => category === currentCategory)
              .map(mapMenu)
          : categories.map(mapMenu)}
      </div>
      {currentCategory === "Sauces" && (
        <div
          className={`${redRoseFont.className} grid md:grid-cols-2 place-items-baseline max-w-screen-lg gap-20 text-3xl text-center`}
        >
          <div className="flex flex-col w-full">
            Texas Sweet
            <span className="text-red-800 text-2xl">
              Touches of Citrus, Pineapple & Brown Sugar
            </span>
          </div>
          <div className="flex flex-col w-full">
            Slow Burn
            <span className="text-red-800 text-2xl">
              Starts out Sweet and has a Slow Heat
            </span>
          </div>
          <div className="flex flex-col w-full">
            Original Mild Herb
            <span className="text-red-800 text-2xl">
              Vinegar base with Sweet Basil, Oregano & Rosemarry
            </span>
          </div>
          <div className="flex flex-col w-full">
            Carolina Mustard
            <span className="text-red-800 text-2xl">
              Traditional Vinegar base Mustard Sauce with a Touch of Pepper
            </span>
          </div>
          <div className="flex flex-col w-full col-span-full">
            Carolina Vinegar
            <span className="text-red-800 text-2xl">
              Classic Carolina Vinegar, Slightly Peppery
            </span>
          </div>
        </div>
      )}
      {show && (
        <MenuItemDetails
          redRoseFont={redRoseFont}
          id={Number(show)}
          category={currentCategory}
        />
      )}
    </section>
  );
}
