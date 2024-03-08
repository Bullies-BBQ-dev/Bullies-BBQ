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
        <div className="w-full bg-yellow-400 flex justify-between  py-1 relative overflow-hidden">
          <Link href="/catering" className="w-full hover:underline">
            <div className="w-full flex justify-center ">
              <span>Having a party? Check out our catering menu!</span>
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
