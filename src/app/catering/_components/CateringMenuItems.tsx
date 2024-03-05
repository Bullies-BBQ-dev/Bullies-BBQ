"use client";
import {
  CateringCategory,
  IMenuItem,
  cateringMenuList,
  cateringCategories,
} from "@/app/_utilities";
import { useRef, useState } from "react";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { useSelectedItemsContext } from "./index";

export function CateringMenuItems({ redRoseFont }: { redRoseFont: NextFont }) {
  const [currentCategory, setCurrentCategory] =
    useState<CateringCategory>(null);
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();
  const menuRef = useRef<HTMLElement | null>(null);

  const mapMenu = (menuItem: IMenuItem, index: number) => {
    function handleItemClick(menuItem: IMenuItem) {
      const existingItemIndex = selectedItems.findIndex(
        (item) => item.name === menuItem.name
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...selectedItems];
        updatedItems[existingItemIndex].quantity =
          (updatedItems[existingItemIndex].quantity || 0) + 1;
        setSelectedItems(updatedItems);
        console.log(selectedItems);
      } else {
        const newSelectedItems = [
          ...selectedItems,
          { ...menuItem, quantity: 1 },
        ];
        setSelectedItems(newSelectedItems);
      }
    }
    return (
      <div key={index} className="w-full flex justify-center">
        <div
          className=" flex flex-col items-center rounded-lg group hover:shadow-gray-400 hover:scale-[1.02]  shadow-xl w-[85%] md:w-[90%] lg:w-[90%] xl:w-full  duration-500 cursor-pointer m-0 p-0"
          onClick={() => handleItemClick(menuItem)}
        >
          <div className="flex flex-col">
            {" "}
            <div className="flex justify-center w-full">
              <img
                src={menuItem.img}
                alt={menuItem.name}
                className="object-fit rounded-t-lg max-h-content  aspect-square"
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between p-3 group-hover:text-red-800 duration-500">
                <span className={`${redRoseFont.className} text-xl`}>
                  {menuItem.name}
                </span>
                <span className={`${redRoseFont.className} text-xl`}>
                  ${menuItem.price}
                </span>
              </div>
              <p className="p-3">{menuItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mapCategories = (category: CateringCategory, index: number) => {
    const isActive = category === currentCategory;
    const categoryClasses = `py-1 rounded hover:bg-red-800/[0.85] duration-200 bg-red-800 text-white  ${
      isActive ? " outline-4 outline outline-yellow-500" : ""
    }`;

    return (
      <button
        key={index}
        className={categoryClasses}
        onClick={() => {
          setCurrentCategory(isActive ? null : category);
          menuRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        {category}
      </button>
    );
  };

  const filteredMenuItems = currentCategory
    ? cateringMenuList.filter(
        (menuItem) => menuItem.category === currentCategory
      )
    : cateringMenuList;

  return (
    <section ref={menuRef} className="min-h-screen mx-2 sm:mx-5">
      <div className="grid px-5 sm:px-0 sm:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-4 sticky top-[72px] py-4 sm:top-30 bg-white z-10">
        {cateringCategories.map(mapCategories)}
      </div>
      <div
        className="justify relative animate-fade-left-right grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-9 py-10"
        style={{ gridColumnGap: "2%" }}
        key={currentCategory}
      >
        {filteredMenuItems.map(mapMenu)}
      </div>
    </section>
  );
}
