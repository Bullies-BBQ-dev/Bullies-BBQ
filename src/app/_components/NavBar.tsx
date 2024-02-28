"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { EMapHrefToTitle, Page } from "../_utilities";
import { pageNames } from "../_utilities";
import { GrMenu, GrClose } from "react-icons/gr";

export function NavBar() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 250) {
        setIsScrolledToTop(false);
      } else {
        setIsScrolledToTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

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
                ? " h-32"
                : " h-20 hover:scale-125 hover:translate-y-3"
            }`}
            src="/Bullies-logo.png"
            alt=""
          />
        </Link>
      );
    return (
      <Link
        href={EMapHrefToTitle[page]}
        key={index}
        className={`h-full w-full duration-200 grid place-items-center min-w-28
          ${
            EMapHrefToTitle[page] === pathName
              ? `text-${
                  isScrolledToTop ? "" : "red"
                }-800 font-extrabold text-xl underline-offset-4 underline`
              : "hover:scale-105 hover:font-extrabold hover:underline-offset-4 hover:underline"
          }
        `}
      >
        <span>{page}</span>
      </Link>
    );
  };

  return (
    <header className="w-full fixed z-20 ">
      <nav
        className={`flex justify-center items-center ease-in duration-100 text-lg ${
          isScrolledToTop
            ? "text-white ease-out duration-300"
            : " bg-white text-black hover:duration-100 shadow-md"
        }`}
      >
        <Link
          href={"/"}
          className={`hidden absolute h-20 lg:left-1 xl:left-4 2xl:left-12 hover:scale-110 animate-fade-in duration-200 ${
            isScrolledToTop
              ? pathName === "/"
                ? "hidden"
                : "lg:flex scale-125"
              : "lg:flex "
          }`}
        >
          <img src="/Bullies-BBQ-Name.png" alt="Bullies-BBQ" />
        </Link>
        <div className="hidden sm:grid grid-cols-5 place-items-center xl:w-full xl:max-w-screen-lg  gap-0 md:gap-5 lg:gap-10 xl:gap-15 duration-300">
          {pageNames.map(mapNavLinks)}
        </div>
        <div className="sm:hidden flex justify-between items-center w-full">
          <img
            src="/Bullies-BBQ-Name.png"
            alt="Bullies-BBQ"
            className="h-16 ms-2"
          />
          <GrMenu
            className={`${
              isScrolledToTop ? "border-2 border-white" : ""
            } rounded m-4`}
            size={45}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        {isModalOpen && (
          <div className="fixed z-20 w-screen h-screen bg-black/90 animate-fade-in top-0">
            <div className=" flex flex-col justify-center items-center gap-y-4 text-white p-20">
              <div className="w-full flex flex-row-reverse">
                <GrClose onClick={() => setIsModalOpen(false)} size={40} />
              </div>
              {pageNames.map(mapModalLinks)}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
