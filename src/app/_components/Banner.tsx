"use client";
import { BannerProps } from "../_utilities";
import { Sancreek } from "next/font/google";
import { useRef } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const sancreek = Sancreek({
  weight: "400",
  subsets: ["latin"],
});

export function Banner({ backgroundURL, title, children }: BannerProps) {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const handleChevronDownClick = () => {
    if (bannerRef)
      window.scrollTo({
        top: bannerRef.current?.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
  };
  return (
    <div
      ref={bannerRef}
      className={" w-full shadow-md aspect-video relative"}
      style={{
        maxHeight: "750px",
        minHeight: "450px",
      }}
    >
      <img
        src={backgroundURL}
        alt="banner-image"
        className="object-cover w-full"
        style={{
          maxHeight: "750px",
          minHeight: "450px",
        }}
      />
      <div className="bg-black/70 w-full h-full grid place-content-center select-none absolute inset-0">
        {title ? (
          <span
            className={`${sancreek.className} text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-fade-in`}
          >
            {title}
          </span>
        ) : (
          <div className="animate-fade-in px-8">{children}</div>
        )}
        <button
          className="absolute p-2 bottom-0 place-self-center animate-bounce-slow md:block hidden"
          onClick={handleChevronDownClick}
        >
          <HiOutlineChevronDown className="text-white" size={40} />
        </button>
      </div>
    </div>
  );
}
