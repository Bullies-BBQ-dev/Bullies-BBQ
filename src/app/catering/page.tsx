import Image from "next/image";
import { Banner } from "../_components";
import { redRoseFont } from "../layout";
import {
  CateringMenuItems,
  CateringForm,
  SelectedItemsProvider,
} from "./_components";

export default function Catering() {
  return (
    <SelectedItemsProvider>
      <div className="">
        <Banner
          backgroundURL="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022184_1683832838.jpg?size=medium"
          title="Catering"
        />
        <div className="flex flex-col md:flex-row p-2 lg:p-4 lg:mx-5">
          <div className="p-4 ">
            <h3
              className={`text-red-800 text-3xl lg:text-4xl ${redRoseFont.className}`}
            >
              Having a party ?
            </h3>
            <div className="">
              <p className=" text-lg lg:text-xl py-4 w-full lg:w-3/4 ">
                Keep Bullies in mind for party sized platters of BBQ and
                fixin&apos;s. Bullies BBQ is good all year round. Winter
                Holidays, Summer Picnics, Super Bowl Sunday, Graduation Parties
                and more!
              </p>
            </div>
            <div
              className={`text-red-800 text-2xl lg:text-4xl ${redRoseFont.className}`}
            >
              Please place {""}
              <a
                href="https://order.toasttab.com/online/bullies-bbq"
                className="underline underline-offset-[0.4rem] hover:text-blue-700 "
                target="_blank"
                rel="noopener noreferrer"
              >
                order online
              </a>{" "}
              or call{" "}
              <a
                href="tel:(843) 686-7427"
                className="underline underline-offset-[0.4rem] hover:text-blue-700 "
              >
                (843) 686-7427
              </a>
              !
            </div>
            <p className="font-extrabold py-4 text-lg text-yellow-600">
              *1 pound serves about 3-5 people
            </p>
          </div>
          <div className="md:w-1/4 lg:flex justify-center items-center hidden">
            <Image src="/Bullies-logo.png" width={200} height={200} alt="" />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-2/3">
            <CateringMenuItems redRoseFont={redRoseFont} />
          </div>

          <div className="flex flex-col items-center pb-10 w-1/3 relative top-0">
            <h3 className="text-3xl font-bold flex justify-center py-10 text-red-800">
              Catering Inquiry
            </h3>
            <p className=" text-lg">
              * Contact us for catering information we will get back to you
              soon, order not confirmed until you receive confirmation email *
            </p>
            <CateringForm />
          </div>
        </div>

        {/* <div className="flex flex-col justify-center items-center pb-10">
          <h3 className="text-3xl font-bold flex justify-center py-10 text-red-800">
            Catering Inquiry
          </h3>
          <p className=" text-lg">
            * Contact us for catering information we will get back to you soon,
            order not confirmed until you receive confirmation email *
          </p>
        </div>

        <CateringForm /> */}
      </div>
    </SelectedItemsProvider>
  );
}
