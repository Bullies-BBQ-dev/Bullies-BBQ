import Image from "next/image";
import { BsYelp } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


export function Footer() {
  return (
    <footer className="bg-red-900 pb-24 flex flex-col items-center px-2">
      <div className="bg-red-600 flex justify-center w-full">
      <Link href="https://www.facebook.com/pages/Bullies-BBQ-Burgers-and-Wings/190373154321712" target="_blank"  className="p-2">
        <span className="text-amber-400 drop-shadow-md">
          <LuFacebook size={40}/>
        </span>
      </Link>
      <Link href="https://www.yelp.com/biz/bullies-bbq-hilton-head-island" target="_blank" className="p-2">
        <span className="text-amber-400 drop-shadow-md">
          <BsYelp size={38} />
        </span>
      </Link>
      <Link href="https://www.instagram.com/explore/locations/472508119426826/bullies-bbq-hilton-head-island/" target="_blank"  className="p-2">
        <span className="text-amber-400 drop-shadow-md">
          <FaInstagram size={40}/>
        </span>
      </Link>
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
