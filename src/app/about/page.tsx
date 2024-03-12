import { Red_Rose } from "next/font/google";
import { Banner } from "../_components";
import { Reviews } from "./_components/Reviews";
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});
export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center ">
        <Banner
          backgroundURL="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
          title="About Us"
        />
        <section className="text-center min-w-60 max-w-screen-xl mx-5">
          <div className="w-full py-10 sm:py-20 flex flex-col items-center">
            <div className="px-5 sm:w-[500px] xl:w-[800px] grid gap-5 sm:gap-8">
              <h1
                className={`${redRoseFont.className} text-5xl sm:text-6xl text-center`}
              >
                Our Story
              </h1>
              <p>
                Bullies BBQ, a beloved establishment with over a decade of
                history, we underwent a change in ownership in 2023 when the
                original owners retired and sold the company. Despite the
                transition, this old-school, counter-service gem located in
                Hilton Head, South Carolina continues to offer a mouthwatering
                array of BBQ meats and sides, available for both dine-in,
                delivery and takeout.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-6 gap-5 sm:gap-8 pb-10">
            <div className="flex flex-col items-center col-span-2 pb-5 sm:pb-10">
              <img
                src="/bullies-bbq-outside-view-1.png"
                alt=""
                className="w-[550px] lg:w-full lg:max-w-[550px] lg:min-w-60 pb-2.5 sm:pb-5 aspect-square object-cover"
              />
              <div className="px-5 sm:w-[500px] xl:w-[420px] grid gap-2 sm:gap-4">
                <h2 className={`${redRoseFont.className} text-4xl`}>
                  Getting Started
                </h2>
                <p>
                  At Bullies BBQ, our journey began with a passion for authentic
                  barbecue flavors. Founded in Hilton Head, South Carolina, our
                  commitment to quality and community has been the cornerstone
                  of our success. From humble beginnings, we&apos;ve grown into
                  a beloved local spot, cherished for our mouthwatering smoked
                  meats and welcoming atmosphere.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center col-span-2 pb-5 sm:pb-10">
              <img
                src="/inside-view.png"
                alt=""
                className="w-[550px] lg:w-full lg:max-w-[550px] lg:min-w-60 pb-2.5 sm:pb-5 aspect-square object-cover"
              />
              <div className="px-5 sm:w-[500px] xl:w-[420px] grid gap-2 sm:gap-4">
                <h2 className={`${redRoseFont.className} text-4xl`}>
                  Local Success
                </h2>
                <p>
                  Our success is deeply rooted in the local community. With a
                  focus on using the finest ingredients and traditional smoking
                  techniques, we&apos;ve earned a reputation for serving the
                  best barbecue in town. Our dedication to excellence and
                  customer satisfaction has made us a favorite among locals and
                  visitors alike.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center col-span-2 pb-5 sm:pb-10">
              <img
                src="/bullies-crew.png"
                alt=""
                className="w-[550px] lg:w-full lg:max-w-[550px] lg:min-w-60 pb-2.5 sm:pb-5 aspect-square object-cover"
              />
              <div className="px-5 sm:w-[500px] xl:w-[420px] grid gap-2 sm:gap-4">
                <h2 className={`${redRoseFont.className} text-4xl sm:5xl`}>
                  Employee Owned
                </h2>
                <p>
                  Bullies BBQ is proud to be employee-owned, with each member of
                  our team contributing to our shared success. Our employees are
                  passionate about barbecue and dedicated to providing
                  exceptional service. As owners, they take pride in upholding
                  our commitment to quality and ensuring that every guest leaves
                  satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
      </main>
      <div className="flex  bg-yellow-400 mb-20">
        <Reviews />
      </div>
    </>
  );
}
