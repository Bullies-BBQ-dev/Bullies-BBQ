// "use client";
import React, { Dispatch, SetStateAction } from "react";
import { IMenuItem, menuList } from "@/app/_utilities";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { GrClose } from "react-icons/gr";
import { redRoseFont } from "@/app/layout";

// export interface MenuItemDetailsProps {
//   redRoseFont: NextFont;
//   menuItem: IMenuItem;
//   setModalItem: Dispatch<SetStateAction<IMenuItem | null>>;
// }

export default function MenuItemDetails({
  params,
}: {
  params: { menuItemDetails: string };
}) {
  const id = Number(params.menuItemDetails);
  return (
    <section
      id="menu-item-details"
      className="fixed inset-0 bg-black/90 grid place-items-center z-50 p-4"
      // onClick={(e) => {
      //   if (
      //     e.target instanceof HTMLElement &&
      //     e.target.id === "menu-item-details"
      //   )
      //     console.log("hi kevin");
      //   // setModalItem(null);
      // }}
    >
      <div className="m-auto max-w-screen-2xl bg-white">
        <div className="grid grid-cols-2 text-center">
          <img src={menuList[id].img} alt="" className="p-10" />
          <div className="flex flex-col items-center justify-evenly p-10 relative">
            <Link href={"/menu"}>
              <button className="absolute top-0 right-0 p-2">
                <GrClose
                  //  onClick={() => setModalItem(null)}
                  size={40}
                />
              </button>
            </Link>
            <span className={`${redRoseFont.className} text-5xl`}>
              {menuList[id].name}
            </span>
            <span className={`${redRoseFont.className} text-3xl`}>
              ${menuList[id].price}
            </span>
            <p>{menuList[id].description}</p>
            <Link
              href={"https://order.toasttab.com/online/bullies-bbq"}
              target="_blank"
              className={`h-20 lg:right-1 xl:right-4 2xl:right-12 hover:scale-125 animate-fade-in duration-200 py-3 
            `}
            >
              <button className="w-full h-full px-2 bg-[#450A0A] text-[#FBBF24] rounded">
                Order now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
