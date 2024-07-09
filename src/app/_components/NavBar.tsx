"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { EMapHrefToTitle, Page } from "../_utilities";
import { pageNames } from "../_utilities";
import { GrMenu, GrClose } from "react-icons/gr";
import { NextFont } from "next/dist/compiled/@next/font";
import { PromoBanner } from ".";
import { IoMdArrowDropdown } from "react-icons/io";

interface NavBarProps {
  redRoseFont: NextFont;
}

export function NavBar({ redRoseFont }: NavBarProps) {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 250;
      setIsScrolledToTop(isAtTop);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mapModalLinks = (page: Page, index: number) => {
    return (
      <Link
        href={page === "Home" ? "/" : EMapHrefToTitle[page]}
        key={index}
        className={`w-full py-4 duration-200 grid place-items-center text-2xl ${
          EMapHrefToTitle[page] === pathName
            ? `font-extrabold underline-offset-4 underline`
            : "hover:scale-105 hover:font-extrabold hover:underline-offset-4 hover:underline"
        } ${page === "Home" ? "" : "order-1"}
        `}
        onClick={() => setIsModalOpen(false)}
      >
        <span>{page}</span>
      </Link>
    );
  };
  const mapNavLinks = (page: Page, index: number) => {
    if (page === "Home")
      return (
        <Link href={"/"} key={index}>
          <img
            key={index}
            className={`aspect-square duration-200 ${
              isScrolledToTop
                ? " pt-1 h-28"
                : " h-20 hover:scale-[1.175] active:scale-95 hover:translate-y-2"
            }`}
            src="/Bullies-logo.png"
            alt=""
          />
        </Link>
      );
    if (page === "Catering")
      return (
        <div
          key={index}
          className={`h-full w-full duration-200 place-items-center min-w-28 ${
            page === "Catering" ? " relaitve group" : ""
          }
          ${
            EMapHrefToTitle[page] === pathName
              ? `${isScrolledToTop ? "" : "bg-red-800 text-white "}`
              : " hover:bg-red-800/50"
          }
        `}
        >
          <Link
            href={EMapHrefToTitle[page]}
            className={`h-full w-full grid place-items-center`}
          >
            {page === "Catering" ? (
              <div
                className={`flex items-center pl-1 group-hover:scale-105 group-hover:font-extrabold group-hover:underline-offset-4 group-hover:underline duration-200           ${
                  EMapHrefToTitle[page] === pathName
                    ? `${
                        isScrolledToTop ? "" : "bg-red-800 text-white "
                      }font-extrabold text-xl underline-offset-4 underline`
                    : ""
                }`}
              >
                {page}
                <IoMdArrowDropdown />
              </div>
            ) : (
              page
            )}
          </Link>

          {page === "Catering" && (
            <div
              className={` border-t-2 w-full flex justify-center py-2 bg-red-800 text-white bottom-0 opacity-0 -translate-y-full group-hover:-translate-y-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto shadow-lg`}
            >
              <Link
                href="https://www.ezcater.com/catering/pvt/bullies-bbq-3"
                target="_blank"
                className=" hover:underline-offset-4 hover:underline"
              >
                Order Catering
              </Link>
            </div>
          )}
        </div>
      );
    return (
      <Link
        href={EMapHrefToTitle[page]}
        key={index}
        className={`h-full w-full duration-200 grid place-items-center min-w-28 group
          ${
            EMapHrefToTitle[page] === pathName
              ? `${
                  isScrolledToTop ? "" : "bg-red-800 text-white "
                }font-extrabold text-xl underline-offset-4 underline`
              : " hover:bg-red-800/50"
          }
        `}
      >
        <span className="duration-200 group-hover:scale-105 group-hover:font-extrabold group-hover:underline-offset-4 group-hover:underline">
          {page}
        </span>
      </Link>
    );
  };

  return (
    <header className="w-full fixed z-20 ">
      <PromoBanner />
      <nav
        className={`flex justify-center items-center ease-in duration-100 text-lg sm:px-6 ${
          isScrolledToTop
            ? "text-white ease-out duration-300"
            : " bg-white text-black hover:duration-100 shadow-md"
        }`}
      >
        <Link
          href={"/"}
          className={`hidden w-52 mr-auto h-20 hover:scale-105 active:scale-95 animate-fade-in duration-200 ${
            isScrolledToTop
              ? pathName === "/"
                ? "hidden"
                : "lg:flex"
              : "lg:flex "
          }`}
        >
          <img src="/Bullies-BBQ-Name.png" alt="Bullies-BBQ" />
        </Link>
        <div className="hidden sm:grid grid-cols-5 place-items-center xl:w-full xl:max-w-screen-lg  gap-0 md:gap-5 lg:gap-10 xl:gap-15 duration-300">
          {pageNames.map(mapNavLinks)}
        </div>
        <Link
          href={EMapHrefToTitle["Order Now"]}
          className={`hidden w-52 ml-auto py-2 items-center justify-center h-20 hover:scale-105 active:scale-95 animate-fade-in duration-200 ${
            isScrolledToTop
              ? pathName === "/"
                ? "hidden"
                : "lg:flex"
              : "lg:flex "
          }`}
          target="_blank"
        >
          <button
            className={
              redRoseFont.className +
              " w-52 py-3 px-8 max-w-fit bg-red-800 border-[1px] border-red-800 text-white text-2xl rounded duration-300 tracking-wide"
            }
          >
            Order Now
          </button>
        </Link>
        <div className="sm:hidden flex flex-row-reverse justify-between items-center w-full p-2">
          <GrMenu size={45} onClick={() => setIsModalOpen(true)} />
          <Link href={"/"}>
            <img
              src="/Bullies-BBQ-Name.png"
              alt="Bullies-BBQ"
              className={`h-16 ms-2 ${
                pathName === "/" && isScrolledToTop ? "hidden" : ""
              }`}
            />
          </Link>
        </div>
        {isModalOpen && (
          <div className="fixed z-50 w-screen h-screen bg-black/90 animate-fade-in top-0">
            <div className=" flex flex-col justify-center items-center gap-y-4 text-white p-20">
              <div className="w-full flex flex-row-reverse">
                <GrClose onClick={() => setIsModalOpen(false)} size={40} />
              </div>
              {pageNames.map(mapModalLinks)}
              <Link
                href={`https://order.toasttab.com/online/bullies-bbq`}
                className={`w-full py-4 duration-200 grid place-items-center text-2xl order-6`}
                onClick={() => setIsModalOpen(false)}
                target="_blank"
              >
                <span>Order Online</span>
              </Link>
              <Link
                href={`https://www.ezcater.com/catering/pvt/bullies-bbq-3`}
                className={`w-full py-4 duration-200 grid place-items-center text-2xl order-7`}
                onClick={() => setIsModalOpen(false)}
                target="_blank"
              >
                <span>Order Catering</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
