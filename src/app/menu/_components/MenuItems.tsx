"use client";

import { Category, EMapHrefToTitle, IMenuItem } from "@/app/_utilities";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { menuList, categories } from "@/app/_utilities";
import { NextFont } from "next/dist/compiled/@next/font";
import { CategoryIcons } from ".";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import dynamic from "next/dynamic";
import { useNavBarHeight } from "@/app/_utilities";
import { DrinkMenuItems } from "./DrinkMenuItems";

const MenuItemDetails = dynamic(
  () => import("@/app/menu/_components/MenuItemDetails"),
  {
    ssr: false,
  }
);

export function MenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const currCategory = useSearchParams().get("category") as Category;
  const menuRef = useRef<HTMLElement | null>(null);
  const show = useSearchParams().get("show");
  const navBarHeight = useNavBarHeight();
  const baseMenuCategories = categories.toSpliced(4);

  const upperCaseFirst = (category: Category) => {
    if (category) return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const mapMenu = (category: Category, index: number) => {
    if (category === "drinks" || category === "beer")
      return (
        <DrinkMenuItems
          key={category}
          isAlcoholic={category === "beer"}
          redRoseFont={redRoseFont}
        />
      );
    return (
      <div key={index} className="flex flex-col">
        <span className={`${redRoseFont.className} text-5xl text-center`}>
          {upperCaseFirst(category)}
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
        href={`/menu?${
          currCategory ? "category=" + currCategory + "&" : ""
        }show=${menuItem.prodId}`}
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
    const categoryClasses = `relative py-1 rounded hover:bg-red-800/[0.85] duration-200 bg-red-800 text-white w-full grid place-items-center ${
      currCategory === category ? " outline-4 outline outline-yellow-500" : ""
    }`;
    return (
      <Link
        href={`/menu${
          category === currCategory ? "" : "?category=" + category
        }`}
        key={index}
        className=""
        scroll={false}
      >
        <button
          className={`${categoryClasses}`}
          onClick={() => {
            menuRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="hidden sm:flex items-center">
            {upperCaseFirst(category)}
            {category === currCategory && (
              <GrClose className="absolute right-0 mr-2" />
            )}
          </span>

          <CategoryIcons category={category}></CategoryIcons>
        </button>
      </Link>
    );
  };

  const mapCategoryButtonsEnd = (category: Category, index: number) => {
    if (currCategory === category) return;
    return (
      <Link
        href={`/menu${
          category === currCategory ? "" : "?category=" + category
        }`}
        key={index}
        className={`basis-full grid place-items-center py-2 hover:bg-yellow-400/30 duration-150 px-4 text-red-800 ${
          (category === "beer" && currCategory === "drinks") ||
          (category === "drinks" && currCategory === "beer") ||
          category === "beer"
            ? ""
            : "border-r-2"
        } border-yellow-400`}
        scroll={false}
        onClick={() => {
          menuRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="hidden sm:flex items-center">
          {upperCaseFirst(category)}
        </span>

        <CategoryIcons category={category}></CategoryIcons>
      </Link>
    );
  };

  return (
    <section
      ref={menuRef}
      className="grid min-h-screen max-w-screen-2xl w-full"
    >
      <div
        className={`grid grid-cols-6 gap-2 sm:gap-2 md:gap-4 md:px-8 lg:px-16 py-4 sticky z-10 bg-white shadow-md px-2 sm:px-0 mx-2 sm:mx-5`}
        style={{ top: navBarHeight - 1 }}
      >
        {categories.map(mapCategoryButtons)}
      </div>
      <div
        className="relative animate-fade-left-right mt-24 mx-2 grid place-items-center"
        style={{ gridColumnGap: "4%", marginTop: navBarHeight + 5 }}
        key={currCategory}
      >
        {currCategory
          ? categories
              .filter((category) => category === currCategory)
              .map(mapMenu)
          : baseMenuCategories.map(mapMenu)}
      </div>
      <div className="grid w-full bg-red-200/10 py-10">
        <div
          className={`${redRoseFont.className} flex flex-col place-self-end m-auto gap-y-5`}
        >
          <div className="w-full text-center text-lg text-red-800">
            {currCategory ? "Looking for more?" : "Check out our drinks!"}
          </div>
          <div className="flex">
            {currCategory
              ? categories.map(mapCategoryButtonsEnd)
              : categories.toSpliced(0, 4).map(mapCategoryButtonsEnd)}
          </div>
          <Link
            href={EMapHrefToTitle["Order Now"]}
            target="_blank"
            className="col-span-full place-self-center"
          >
            <button
              className={
                " py-3 px-16 max-w-fit bg-red-800 border-[1px] border-red-800 hover:border-white text-white text-2xl tracking-wide rounded hover:scale-105 active:scale-95 duration-300"
              }
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>
      {show && (
        <MenuItemDetails
          redRoseFont={redRoseFont}
          id={Number(show)}
          category={currCategory}
        />
      )}
    </section>
  );
}
