"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";

export function PromoBanner() {
  const [isOpen, setIsOpen] = useState(true);

  //   useEffect(() => {
  //     // const isBannerClosed = sessionStorage.getItem("isBannerClosed");
  //     // if (isBannerClosed) {
  //     setIsOpen(false);
  //     // }
  //   }, []);

  const handleClose = () => {
    setIsOpen(false);
    // sessionStorage.setItem("isBannerClosed", "true");
  };

  return (
    <>
      {isOpen && (
        <div className="w-full bg-yellow-400 flex justify-between  py-1 relative overflow-hidden">
          <Link
            href="/catering"
            className="w-full hover:underline"
            // onClick={handleClose}
          >
            <div className="animate-slide w-full flex ">
              <span>Please check out our catering menu!</span>
            </div>
          </Link>
          <div className="bg-yellow-400 absolute right-0 px-4">
            <IoMdClose
              className="text-2xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </>
  );
}
