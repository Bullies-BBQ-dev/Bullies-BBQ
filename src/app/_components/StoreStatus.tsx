"use client";
import { FaCircle } from "react-icons/fa";

export function StoreStatus() {
  const isOpen = () => {
    // const now = new Date().getTime();
    // const openTime = new Date();
    // openTime.setUTCHours(18, 0, 0); // Set opening time to 11am UTC
    // const closeTime = new Date();
    // closeTime.setUTCHours(27, 0, 0); // Set closing time to 8pm UTC
    const now = new Date().getTime();
    const openTime = new Date();
    openTime.setUTCHours(15, 0, 0); // Set opening time to 11am UTC
    const closeTime = new Date();
    closeTime.setUTCHours(24, 0, 0); // Set closing time to 8pm UTC

    console.log("openTime", openTime);
    console.log("closeTime", closeTime);
    console.log("now", now);
    if (now >= openTime.getTime() && now <= closeTime.getTime()) {
      if (now >= closeTime.getTime() - 3600 * 1000) {
        return "closingSoon";
      } else {
        return "open";
      }
    } else if (now >= openTime.getTime() - 3600 * 1000) {
      return "openingSoon";
    } else {
      return "closed";
    }
  };
  console.log(isOpen());
  return (
    <>
      {isOpen() === "open" ? (
        <div className="animate-pulse text-green-400 flex gap-1">
          <FaCircle className="self-center" />
          <p>Open Now</p>
        </div>
      ) : isOpen() === "closed" ? (
        <div className="text-red-600 flex gap-1">
          <FaCircle className="self-center" />
          <p>Closed</p>
        </div>
      ) : isOpen() === "openingSoon" ? (
        <div className="text-gray-500 animate-pulse flex gap-1">
          <FaCircle className="self-center" />
          <p>Opening Soon</p>
        </div>
      ) : (
        <div className="animate-pulse text-orange-400 flex gap-1">
          <FaCircle className="self-center" />
          <p>Closing Soon</p>
        </div>
      )}
    </>
  );
}
