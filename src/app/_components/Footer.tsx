import Image from "next/image";
import { BsYelp } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Red_Rose } from "next/font/google";
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});

export function Footer() {
  return (
    <>
      <div className="bg-red-800 flex justify-center w-full">
        <Link
          href="https://www.facebook.com/pages/Bullies-BBQ-Burgers-and-Wings/190373154321712"
          target="_blank"
          className="p-2"
        >
          <span className="text-amber-400 drop-shadow-md">
            <LuFacebook size={30} />
          </span>
        </Link>
        <Link
          href="https://www.yelp.com/biz/bullies-bbq-hilton-head-island"
          target="_blank"
          className="p-2"
        >
          <span className="text-amber-400 drop-shadow-md">
            <BsYelp size={29} />
          </span>
        </Link>
        <Link
          href="https://www.instagram.com/explore/locations/472508119426826/bullies-bbq-hilton-head-island/"
          target="_blank"
          className="p-2"
        >
          <span className="text-amber-400 drop-shadow-md">
            <FaInstagram size={30} />
          </span>
        </Link>
      </div>
      <footer className="bg-red-950 flex flex-col items-center px-10 py-10">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 text-white place-items-center max-w-screen-xl">
          <div
            className={
              redRoseFont.className +
              " flex col-span-3 grid md:grid-cols-4 sm:grid-cols-1 gap-8"
            }
          >
            <div className="flex flex-col col-span-2 justify-between h-44 w-72">
              <p>3 Regency Pkwy Hilton Head Island, SC 29928</p>

              <p>
                Located 6/10&apos;s of a mile WEST of the Palmetto Dunes
                Entrance on Hwy 278, Turn at the Red Roof Inn.
              </p>

              <p>(843) 686-7427</p>
            </div>
            <div className="flex flex-col col-span-1 w-40">
              <p>Monday - Saturday:</p>

              <p>11am - 8pm</p>
              <br />
              <p>Sunday:</p>

              <p>Closed</p>
            </div>
            <div className="flex flex-col col-span-1 w-24">
              <Link
                href={"/about"}
                className="hover:underline hover:underline-offset-4 decoration-2"
              >
                <p>About Us</p>
              </Link>
              <br />
              <Link
                href={"https://order.toasttab.com/online/bullies-bbq"}
                className="hover:underline hover:underline-offset-4 decoration-2"
              >
                <p>Order Now</p>
              </Link>
              <br />
              <Link
                href={"/catering"}
                className="hover:underline hover:underline-offset-4 decoration-2"
              >
                <p>Catering</p>
              </Link>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 w-44 pt-8 md:pt-0">
            <Image
              src="/Bullies-logo.png"
              alt="BulliesBBQ logo"
              width={165}
              height={165}
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <p className="text-white text-xxs pt-8 w-46">
            © 2008 -2017 Bullies BBQ, Inc. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
