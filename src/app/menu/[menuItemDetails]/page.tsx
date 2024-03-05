// "use client";
import React, { Dispatch, SetStateAction } from "react";
import { IMenuItem, menuList } from "@/app/_utilities";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { GrClose } from "react-icons/gr";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { redRoseFont } from "@/app/layout";

export interface MenuItemDetailsProps {
  redRoseFont: NextFont;
  id: number;
}
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
// export interface MenuItemDetailsProps {
//   redRoseFont: NextFont;
//   menuItem: IMenuItem;
//   setModalItem: Dispatch<SetStateAction<IMenuItem | null>>;
// }

export function MenuItemDetails({ searchParams }: SearchParamProps) {
  const id = searchParams?.show;
  const index = Number(id) - 1;
  const nextOrPrevIndex = (next: boolean, currIndex: number) => {
    // const pokemonByBox = [...pokemonList].splice(currentBox * 30, 30);
    // const currentInBoxIndex = currIndex % 30;
    let nextOrPrevPokemonIndex: number = next
      ? (currIndex + 1) % menuList.length
      : (currIndex - 1 + menuList.length) % menuList.length;
    return nextOrPrevPokemonIndex + 1;
  };
  return (
    <section
      key={id}
      id="menu-item-details"
      className="fixed inset-0 bg-black/90 grid place-items-center z-50 p-4"
      // onClick={(e) => {
      //   if (
      //     e.target instanceof HTMLElement &&
      //     e.target.id === "menu-item-details"
      //   )
      //     setModalItem(null);
      // }}
    >
      <div className="m-auto max-w-screen-2xl bg-white rounded-md grid place-items-center animate-fade-in">
        <div className="grid grid-cols-2 animate-fade-in text-center place-items-center justify-center">
          <div className="col-span-full w-full flex justify-between">
            <Link href={"/menu"} scroll={false}>
              <button className="bg-orange-950 m-2 text-white p-2">
                Back to Menu
              </button>
            </Link>
            <Link href={"/menu"} scroll={false}>
              <button className="p-2">
                <GrClose
                  // onClick={() => setModalItem(null)}
                  size={40}
                />
              </button>
            </Link>
          </div>
          <img
            src={menuList[index].img}
            alt=""
            className="m-10 rounded-md shadow-md"
          />
          <div className="flex flex-col items-center justify-evenly h-full max-w-screen-sm p-10 relative">
            <span className={`${redRoseFont.className} text-5xl`}>
              {menuList[index].name}
            </span>
            <span className={`${redRoseFont.className} text-3xl`}>
              ${menuList[index].price}
            </span>
            <p>{menuList[index].description}</p>
            <Link
              href={"https://order.toasttab.com/online/bullies-bbq"}
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
          <div className="bg-white col-span-full grid grid-cols-2 gap-1 relative">
            <Link
              className="bg-gray-100 place-self-end w-56 flex items-center"
              href={`/menu?show=${nextOrPrevIndex(false, index)}`}
              scroll={false}
            >
              <HiMiniChevronLeft size={25} />
              <button className={`${redRoseFont.className} w-full py-4`}>
                {menuList[nextOrPrevIndex(false, index) - 1].name}{" "}
              </button>
            </Link>
            <Link
              className="bg-gray-100 place-self-start w-56 flex items-center"
              href={`/menu?show=${nextOrPrevIndex(true, index)}`}
              scroll={false}
            >
              <button className={`${redRoseFont.className} w-full py-4`}>
                {menuList[nextOrPrevIndex(true, index) - 1].name}{" "}
              </button>
              <HiMiniChevronRight size={25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
// export function MenuItemDetails({
//   redRoseFont,
//   menuItem,
//   setModalItem,
// }: MenuItemDetailsProps) {
//   // const id = Number(params.menuItemDetails);
//   return (
//     <section
//       id="menu-item-details"
//       className="fixed inset-0 bg-black/90 grid place-items-center z-50 p-4"
//       onClick={(e) => {
//         if (
//           e.target instanceof HTMLElement &&
//           e.target.id === "menu-item-details"
//         )
//           setModalItem(null);
//       }}
//     >
//       <div className="m-auto max-w-screen-2xl bg-white animate-fade-in rounded-md grid place-items-center">
//         <div className="grid grid-cols-2 text-center place-items-center justify-center">
//           <img
//             src={menuItem.img}
//             alt=""
//             className="m-10 rounded-md shadow-md"
//           />
//           <div className="flex flex-col items-center justify-evenly h-full max-w-screen-sm p-10 relative">
//             <button className="absolute top-0 right-0 p-2">
//               <GrClose onClick={() => setModalItem(null)} size={40} />
//             </button>
//             <span className={`${redRoseFont.className} text-5xl`}>
//               {menuItem.name}
//             </span>
//             <span className={`${redRoseFont.className} text-3xl`}>
//               ${menuItem.price}
//             </span>
//             <p>{menuItem.description}</p>
//             <Link
//               href={"https://order.toasttab.com/online/bullies-bbq"}
//               target="_blank"
//               className={`h-20 lg:right-1 xl:right-4 2xl:right-12 hover:scale-110 animate-fade-in duration-200 py-3
//             `}
//             >
//               <button
//                 className={
//                   redRoseFont.className +
//                   " py-3 px-16 max-w-fit bg-red-800 border-4 border-red-800 text-white text-2xl tracking-wide rounded hover:outline-8 hover:outline-red-800 hover:bg-white/80 hover:text-red-800 duration-300"
//                 }
//               >
//                 Order Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
