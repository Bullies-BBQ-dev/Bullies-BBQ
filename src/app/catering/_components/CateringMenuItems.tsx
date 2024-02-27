"use client";
import { CateringCategory, IMenuItem } from "@/app/_utilities";
import { useState } from "react";
import { cateringMenuList, cateringCategories } from "@/app/_utilities";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { useSelectedItemsContext } from "./context";
import { Popup } from "./Popup";

export function CateringMenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const [currentCategory, setCurrentCategory] =
    useState<CateringCategory>(null);
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();
  const [showAllItems, setShowAllItems] = useState(false);

  const mapMenu = (menuItem: IMenuItem, index: number) => {
    function handleClick(menuItem: IMenuItem) {
      const existingItemIndex = selectedItems.findIndex(
        (item) => item.name === menuItem.name
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...selectedItems];
        updatedItems[existingItemIndex].quantity =
          (updatedItems[existingItemIndex].quantity || 0) + 1;
        setSelectedItems(updatedItems);
      } else {
        const newSelectedItems = [
          ...selectedItems,
          { ...menuItem, quantity: 1 },
        ];
        setSelectedItems(newSelectedItems);
      }
    }
    return (
      <div
        className="flex flex-col rounded-lg group hover:shadow-gray-400 hover:scale-[1.02] shadow-xl min-w-72 duration-500 cursor-pointer"
        key={index}
        onClick={() => handleClick(menuItem)}
      >
        <div className="flex justify-center">
          <Image
            src={menuItem.img}
            alt={menuItem.name}
            className="object-fit rounded-t-lg h-48 w-48"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col justify-end h-full ">
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

  const mapCategories = (category: CateringCategory, index: number) => {
    return (
      <button
        key={index}
        className={`py-1 rounded border-4 hover:bg-red-800/[0.85] hover:scale-[1.02] duration-300 bg-red-800  ${
          category === currentCategory
            ? "bg-red-800 text-white border-yellow-500"
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
  const itemsToShow = currentCategory
    ? showAllItems
      ? cateringMenuList.length
      : 9
    : cateringMenuList.length;

  return (
    <section className="mx-5 min-h-full">
      <div className="grid  grid-cols-3 lg:grid-cols-6 gap-4 px-4 py-4">
        {cateringCategories.map(mapCategories)}
      </div>
      <div
        className="relative animate-fade-left-right grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9 xl:mx-9 max-w-screen-full py-10"
        style={{ gridColumnGap: "4%" }}
        key={currentCategory}
      >
        {currentCategory
          ? cateringMenuList
              .filter((menuIem) => menuIem.category === currentCategory)
              .slice(0, itemsToShow)
              .map(mapMenu)
          : cateringMenuList.slice(0, itemsToShow).map(mapMenu)}
      </div>
      {currentCategory &&
      cateringMenuList.filter(
        (menuItem) => menuItem.category === currentCategory
      ).length > 9 ? (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllItems(!showAllItems)}
            className="text-black hover:underline ease-in-out delay-75"
          >
            {showAllItems ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : null}
      <Popup />
    </section>
  );
}