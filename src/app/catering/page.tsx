import Image from "next/image";
import { Banner } from "../_components";
import { redRoseFont } from "../layout";
import { CateringMenuItems } from "./_components/CateringMenuItems";
import { CateringForm } from "./_components/CateringForm";
// import { IMenuItem } from "../_utilities";
import { SelectedItemsProvider } from "./_components/context";

export default function Catering() {
  return (
    <SelectedItemsProvider>
      <div className="">
        <Banner
          backgroundURL="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022184_1683832838.jpg?size=medium"
          title="Catering"
        />
        <div className="flex flex-col md:flex-row p-4 ">
          <div className="p-4 ">
            <h3 className={`text-red-800 text-4xl ${redRoseFont.className}`}>
              Having a party ?
            </h3>
            <p className="text-xl py-4 w-3/4">
              Keep Bullies in mind for party sized platters of BBQ and
              fixin&apos;s. Bullies BBQ is good all year round. Winter Holidays,
              Summer Picnics, Super Bowl Sunday, Graduation Parties and more!
            </p>

            <p className={`text-red-800 text-3xl ${redRoseFont.className}`}>
              Place order online or call{" "}
              <a
                href="tel:(843) 686-7427"
                className="underline underline-offset-[0.4rem] hover:text-blue-600 "
              >
                (843) 686-7427
              </a>
            </p>
            <p className="font-extrabold py-4">
              *if serving parties larger than 10 please fill out form below
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center">
            <Image src="/Bullies-logo.png" width={200} height={200} alt="" />
          </div>
        </div>
        <div>
          <CateringMenuItems redRoseFont={redRoseFont} />
        </div>
        <CateringForm />
      </div>
    </SelectedItemsProvider>
  );
}
