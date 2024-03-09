import Image from "next/image";
import { Banner } from "../_components";
import {
  CateringMenuItems,
  CateringForm,
  SelectedItemsProvider,
  MobileForm,
} from "./_components";
import { Red_Rose } from "next/font/google";
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});

export default function Catering() {
  return (
    <SelectedItemsProvider>
      <Banner
        backgroundURL="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022184_1683832838.jpg?size=medium"
        title="Catering"
      />
      <div className="mx-5 sm:mx-10 my-10 lg:my-20">
        <div className="mx-auto w-full min-w-60 lg:min-w-[950px] lg:max-w-full xl:min-w-[1180px] xl:max-w-[1800px]">
          <div className="flex flex-col md:flex-row justify-between pb-5 lg:pb-10">
            <div className="flex flex-col justify-center w-full sm:w-[570px] md:w-[690px] lg:w-[550px] lg:min-w-[550px] 2xl:w-[700px]">
              <h3
                className={`text-red-800 text-4xl lg:text-5xl  ${redRoseFont.className}`}
              >
                Having a party ?
              </h3>
              <div className="">
                <p className=" text-lg py-4">
                  Keep Bullies in mind for party sized platters of BBQ and
                  fixin&apos;s. Bullies BBQ is good all year round. Winter
                  Holidays, Summer Picnics, Super Bowl Sunday, Graduation
                  Parties and more!
                </p>
              </div>

              <p
                className={`${redRoseFont.className} text-red-800 pb-4 text-3xl sm:text-4xl max-w-[420px] sm:w-[455px] sm:max-w-[455px] 2xl:w-full 2xl:max-w-full `}
              >
                Click to add items to catering inquiry form
              </p>
              <p
                className={` text-yellow-600 text-xl max-w-[420px] sm:w-[500px] sm:max-w-[500px] 2xl:w-full 2xl:max-w-full `}
              >
                *For smaller orders, please place {""}
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
                  className="hover:underline hover:underline-offset-[0.4rem] underline underline-offset-[0.4rem] decoration-2 hover:decoration-4"
                >
                  (843) 686-7427
                </a>
              </p>

              <p className={` py-4 text-xl text-yellow-600`}>
                *1 pound serves about 3-5 people
              </p>
            </div>
            <div className="md:min-w-[80px] md:max-w-[880px] lg:flex justify-center items-center hidden pl-8">
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
                <p className="text-md pb-10 px-4">
                  *Contact us for catering information
                  <br />
                  *Order not confirmed until you receive confirmation email
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
