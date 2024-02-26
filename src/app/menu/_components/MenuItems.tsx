"use client";

import { Category, IMenuItem } from "@/app/_utilities";
import { useState } from "react";
import { menuList, categories } from "@/app/_utilities";
import { NextFont } from "next/dist/compiled/@next/font";

export function MenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const [currentCategory, setCurrentCategory] = useState<Category>(null);
  const mapMenu = (menuItem: IMenuItem, index: number) => {
    return (
      <div
        className="flex flex-col rounded-lg group hover:shadow-amber-900 hover:scale-[1.02] outline outline-red-800/0 hover:outline-red-800/20 shadow-xl min-w-72 duration-500"
        key={index}
      >
        <img src={menuItem.img} alt={menuItem.name} className="rounded-t-lg" />
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between p-3 group-hover:text-red-800 duration-500">
            <span className={`${redRoseFont.className} text-3xl`}>
              {menuItem.name}
            </span>
            <span className={`${redRoseFont.className} text-3xl`}>
              ${menuItem.price}
            </span>
          </div>
          <p className="p-3">{menuItem.description}</p>
        </div>
      </div>
    );
  };

  const mapCategories = (category: Category, index: number) => {
    return (
      <button
        key={index}
        className={`py-1 rounded border-4 border-red-800 duration-300 hover:bg-white hover:text-red-800 ${
          category === currentCategory
            ? "bg-white text-red-800"
            : "bg-red-800 text-white"
        }`}
        onClick={() => {
          if (category === currentCategory) setCurrentCategory(null);
          else setCurrentCategory(category);
        }}
      >
        {category}
      </button>
    );
  };

  return (
    <section className="mx-5 min-h-screen">
      <div className="grid grid-cols-6 gap-4 px-16 py-4 sticky top-20 z-10 bg-white">
        {categories.map(mapCategories)}
      </div>
      <div
        className="relative animate-fade-left-right grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 xl:mx-9 max-w-screen-2xl py-10"
        style={{ gridColumnGap: "4%" }}
        key={currentCategory}
      >
        {currentCategory
          ? menuList
              .filter((menuIem) => menuIem.category === currentCategory)
              .map(mapMenu)
          : menuList.map(mapMenu)}
      </div>
    </section>
  );
}
