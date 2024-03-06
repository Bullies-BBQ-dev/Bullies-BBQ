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
export function MenuItemDetails({
  redRoseFont,
  id,
  category,
}: MenuItemDetailsProps) {
  const currItem = menuList.find(
    (menuItem: IMenuItem) => menuItem.prodId === id
  ) as IMenuItem;
  const router = useRouter();
  const currList = category
    ? menuList.filter((menuItem) => menuItem.category === category)
    : menuList;
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
      className="fixed inset-0 bg-black/90 grid place-items-center z-50 p-4"
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
      <div className="m-auto max-h-screen max-w-screen-xl bg-white rounded-md grid place-items-center overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 animate-fade-in-200 text-center place-items-center">
          <div className="col-span-full w-full flex justify-between">
            <Link
              href={`/menu${category ? "?category=" + category : ""}`}
              scroll={false}
              className="p-1"
            >
              <button className="bg-red-800 h-full text-white py-2 pr-2 flex rounded items-center">
                <HiMiniChevronLeft size={25} />
                Back to Menu
              </button>
            </Link>
            <Link
              href={`/menu${category ? "?category=" + category : ""}`}
              scroll={false}
              className="p-1"
            >
              <button className="p-2 hover:text-red-800 hover:bg-gray-300 duration-150 rounded">
                <GrClose size={40} />
              </button>
            </Link>
          </div>

          <div className="p-1 sm:p-10">
            <img
              src={currItem.img}
              alt=""
              className="rounded-md shadow-md animate-fade-in aspect-[4/3] h-72 sm:h-[425px] object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-between h-full w-full max-w-screen-sm p-2 sm:p-10 relative animate-fade-in">
            <div className="w-full h-full flex flex-col justify-between">
              <span
                className={`${
                  redRoseFont.className
                } text-4xl sm:text-5xl pb-2 ${
                  currItem.name === "Bull Dog\n(2 Meat Combo)"
                    ? "whitespace-pre"
                    : "sm:whitespace-pre"
                }`}
              >
                {currItem.name}
              </span>

              {currItem.category === "sandwiches" ? (
                <div
                  className={`${redRoseFont.className} flex flex-wrap justify-around sm:flex-col py-2 sm:gap-y-4 text-2xl sm:text-3xl sm:w-full`}
                >
                  <div>
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
