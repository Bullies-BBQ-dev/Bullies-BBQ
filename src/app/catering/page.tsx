import Image from "next/image";
import { Banner } from "../_components";
import { redRoseFont } from "../layout";
import {
  CateringMenuItems,
  CateringForm,
  SelectedItemsProvider,
  MobileForm,
} from "./_components";

export default function Catering() {
  return (
    <SelectedItemsProvider>
      <div className="">
        <Banner
          backgroundURL="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022184_1683832838.jpg?size=medium"
          title="Catering"
        />
        <div className="mx-auto w-full min-w-60 lg:min-w-[950px] lg:max-w-full xl:min-w-[1180px] xl:max-w-[1460px]">
          <div className="flex flex-col md:flex-row  mx-2 sm:mx-5">
            <div className="flex p-4 flex-col justify-center">
              <h3
                className={`text-red-800 text-3xl lg:text-4xl  ${redRoseFont.className}`}
              >
                Having a party ?
              </h3>
              <div className="">
                <p className=" text-lg lg:text-xl py-4 w-full lg:w-3/4 text-black sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow-600">
                  Keep Bullies in mind for party sized platters of BBQ and
                  fixin&apos;s. Bullies BBQ is good all year round. Winter
                  Holidays, Summer Picnics, Super Bowl Sunday, Graduation
                  Parties and more!
                </p>
              </div>
              <div
                className={`text-red-800 text-2xl lg:text-4xl ${redRoseFont.className}`}
              >
                Please place {""}
                <a
                  href="https://order.toasttab.com/online/bullies-bbq"
                  className="hover:underline hover:underline-offset-[0.4rem] underline underline-offset-[0.4rem] decoration-2 hover:decoration-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  order online
                </a>{" "}
                or call{" "}
                <a
                  href="tel:(843) 686-7427"
                  className="hover:underline hover:underline-offset-[0.4rem] underline underline-offset-[0.4rem] decoration-2 hover:decoration-4 duration-1000"
                >
                  (843) 686-7427
                </a>
              </div>
              <p className="font-extrabold py-4 text-lg text-yellow-600">
                *1 pound serves about 3-5 people <br /> *Click to add item to
                form
              </p>
            </div>
            <div className="md:min-w-[80px] md:max-w-[880px] lg:flex justify-center items-center hidden p-10 pl-4">
              <Image
                src="/bullies-crew.png"
                width={600}
                height={600}
                alt=""
                className="object-cover aspect-16/12"
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-full lg:w-[70%] ">
              <CateringMenuItems redRoseFont={redRoseFont} />
            </div>
            <div className="lg:flex md:hidden sm:hidden min-w-[356px] flex-col items-center pb-10 w-1/3 hidden sticky top-14 right-0 h-screen overflow-y-scroll shadow-2xl ">
              <div className="sticky top-14">
                <h3 className="text-3xl font-bold flex justify-center py-10 text-red-800">
                  Catering Inquiry
                </h3>
                <p className="text-md text-center pb-10 px-4">
                  *Contact us for catering information we will get back to you
                  soon, order not confirmed until you receive confirmation
                  email*
                </p>
                <div className="sticky top-0  ">
                  <CateringForm />
                </div>
              </div>
            </div>
          </div>
          <div>
            <MobileForm />
          </div>
        </div>
      </div>
    </SelectedItemsProvider>
  );
}
