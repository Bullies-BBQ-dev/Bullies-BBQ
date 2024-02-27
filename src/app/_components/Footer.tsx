import Image from "next/image";
import { BsYelp } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-red-900 pb-24 flex flex-col items-center px-2">
      <div className="bg-red-600 flex justify-center w-full">
        <div>icon</div>
        <span className=" text">
          <BsYelp size={40} />
        </span>

        <div>icon</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-white pt-16 place-items-center max-w-screen-xl">
        <div className="col-span-2">
          <p>3 Regency Pkwy Hilton Head Island, SC 29928</p>
          <p>
            Located 6/10's of a mile WEST of the Palmetto Dunes Entrance on Hwy
            278, Turn at the Red Roof Inn.
          </p>
          <p>(843) 686-7427</p>
        </div>
        <div>
          <p>Monday - Saturday: 11am - 8pm Sunday: Closed</p>
        </div>
        <div className="flex flex-col justify-around h-full">
          <p>About Us</p>
          <p>Order Now</p>
          <p>Catering</p>
        </div>
        <div className="col-span-2">
          <Image
            src="/Bullies-logo.png"
            alt="BulliesBBQ logo"
            width={175}
            height={175}
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}
