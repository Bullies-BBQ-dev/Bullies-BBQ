"use client";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

export function StoreStatus() {
  const [storeStatus, setStoreStatus] = useState("open");
  useEffect(() => {
    const isOpen = () => {
      const now = new Date();

      const openTime = new Date();
      openTime.setUTCHours(15, 0, 0); // Set opening time to 11am

      const closeTime = new Date();
      closeTime.setUTCHours(24, 0, 0); // Set closing time to 8pm

      const openingSoonTime = new Date(openTime);
      openingSoonTime.setUTCHours(openTime.getUTCHours() - 1); // Set opening soon time to 1 hour before opening

      const closingSoonTime = new Date(closeTime);
      closingSoonTime.setUTCHours(closeTime.getUTCHours() - 1); // Set closing soon time to 1 hour before closing
      if (now >= openTime && now <= closeTime) {
        if (now >= closingSoonTime) {
          setStoreStatus("closingSoon");
        } else {
          setStoreStatus("open");
        }
      } else if (now > closeTime && now >= openingSoonTime) {
        setStoreStatus("closed");
      } else if (now >= openingSoonTime) {
        setStoreStatus("openingSoon");
      } else {
        setStoreStatus("closed");
      }
    };
    isOpen();
    const interval = setInterval(isOpen, 1000); //change the 1000 to however many miliseconds you want between execution
    return () => clearInterval(interval);
  }, []);
  // const isOpen = () => {
  //   const now = new Date();

  //   const openTime = new Date();
  //   openTime.setUTCHours(15, 0, 0); // Set opening time to 11am

  //   const closeTime = new Date();
  //   closeTime.setUTCHours(24, 0, 0); // Set closing time to 8pm

  //   const openingSoonTime = new Date(openTime);
  //   openingSoonTime.setUTCHours(openTime.getUTCHours() - 1); // Set opening soon time to 1 hour before opening

  //   const closingSoonTime = new Date(closeTime);
  //   closingSoonTime.setUTCHours(closeTime.getUTCHours() - 1); // Set closing soon time to 1 hour before closing

  //   if (now >= openTime && now <= closeTime) {
  //     if (now >= closingSoonTime) {
  //       return "closingSoon";
  //     } else {
  //       return "open";
  //     }
  //   } else if (now > closeTime && now >= openingSoonTime) {
  //     return "closed";
  //   } else if (now >= openingSoonTime) {
  //     return "openingSoon";
  //   } else {
  //     return "closed";
  //   }
  // };

  return (
    <>
      {storeStatus === "open" ? (
        <div className="animate-pulse text-green-400 flex gap-1">
          <FaCircle className="self-center" />
          <p>Open Now</p>
        </div>
      ) : storeStatus === "closed" ? (
        <div className="text-red-600 flex gap-1">
          <FaCircle className="self-center" />
          <p>Closed</p>
        </div>
      ) : storeStatus === "openingSoon" ? (
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
