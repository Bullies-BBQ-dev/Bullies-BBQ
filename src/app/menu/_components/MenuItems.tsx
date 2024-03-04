"use client";

import { Category, IMenuItem } from "@/app/_utilities";
import { useRef, useState } from "react";
import { menuList, categories } from "@/app/_utilities";
import { NextFont } from "next/dist/compiled/@next/font";
import { CategoryIcons } from ".";

export function MenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const [currentCategory, setCurrentCategory] = useState<Category>(null);
  const menuRef = useRef<HTMLElement | null>(null);

  const mapMenu = (category: Category, index: number) => {
    return (
      <div key={index} className="flex flex-col">
        <span
          className={`${redRoseFont.className} text-5xl text-center underline`}
        >
          {category}
        </span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:mx-9 max-w-screen-2xl py-10 mx-2">
          {menuList
            .filter((menuIem) => menuIem.category === category)
            .map(mapMenuItems)}
        </div>
      </div>
    );
  };
  const mapMenuItems = (menuItem: IMenuItem, index: number) => {
    return (
      <div
        className="flex flex-col rounded-lg group hover:shadow-amber-900 hover:scale-[1.02]  shadow-lg min-w-72 duration-500"
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

  const mapCategoryButtons = (category: Category, index: number) => {
    return (
      <button
        key={index}
        className={`py-1 rounded border-4 border-red-800 duration-300 hover:bg-white hover:text-red-800 grid place-items-center ${
          category === currentCategory
            ? "bg-white text-red-800"
            : "bg-red-800 text-white"
        }`}
        onClick={() => {
          if (category === currentCategory) setCurrentCategory(null);
          else setCurrentCategory(category);
          // menuRef.current?.scrollTo(0, 0);
          menuRef.current?.scrollIntoView();
        }}
      >
        <span className="hidden sm:grid">{category}</span>
        <CategoryIcons category={category}></CategoryIcons>
      </button>
    );
  };

  return (
    <section ref={menuRef} className="mx-2 sm:mx-5 min-h-screen">
      <div className="grid grid-cols-6 gap-2 sm:gap-2 md:gap-4 px-1 md:px-8 lg:px-16 py-4 sticky top-[72px] sm:top-20 z-10 bg-white shadow-md duration-200 mb-12">
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
    </section>
  );
}
