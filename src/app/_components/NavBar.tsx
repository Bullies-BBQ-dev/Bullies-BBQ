"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { EMapHrefToTitle, Page } from "../_utilities";
import { pageNames } from "../_utilities/data";

export function NavBar() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
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

  const mapNavLinks = (page: Page, index: number) => {
    if (page === "Home")
      return (
        <Link href={"/"} key={index}>
          <img
            key={index}
            className={`aspect-square duration-300 ${
              isScrolledToTop ? " h-32" : " h-20"
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
        className={`duration-300 
          ${
            EMapHrefToTitle[page] === pathName
              ? "text-amber-800 font-extrabold text-xl underline-offset-4 underline"
              : ""
          }
        `}
      >
        {page}
      </Link>
    );
  };

  return (
    <nav
      className={`hidden sm:flex justify-center items-center w-full px-6 fixed z-10 ease-in duration-100 text-lg ${
        isScrolledToTop
          ? "text-white ease-out duration-300"
          : " bg-white text-black hover:py-1 hover:duration-100 shadow-md"
      }`}
    >
      <div className="grid grid-cols-7 place-items-center md:max-w-screen-xl gap-10">
        {pageNames.map(mapNavLinks)}
      </div>
    </nav>
  );
}
