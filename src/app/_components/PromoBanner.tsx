"use client";
import Link from "next/link";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";

export function PromoBanner() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="w-full bg-yellow-400 flex py-1 justify-between relative overflow-hidden" id="promo-banner">
          <Link
            href="/catering"
            className="hover:underline w-[351px] mx-auto pl-1"
          >
            <span>Having a party? Check out our catering menu!</span>
          </Link>
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={handleClose}
          />
        </div>
      )}
    </>
  );
}
