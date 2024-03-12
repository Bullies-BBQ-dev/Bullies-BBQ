import Link from "next/link";
import { HomePageMenuItems, Banner } from "./_components";
import { StoreStatus } from "./_components/StoreStatus";
import { EMapHrefToTitle } from "./_utilities";
import { Red_Rose } from "next/font/google";
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner
        backgroundURL={
          "https://destination-bbq.com/wp-content/uploads/2015/04/Bullies-Interior-1024x576.jpg.webp"
        }
      >
        <div className="grid sm:grid-cols-2 place-content-center gap-1 sm:gap-4 md:gap-16 lg:gap-24">
          <div className="pt-14 sm:pt-0 max-w-[360px] sm:max-w-full">
            <img className="" src="/Bullies-BBQ-Name.png" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start">
            <span
              className={
                redRoseFont.className +
                " text-white text-3xl py-2 tracking-wide"
              }
            >
              Barbecue in <br /> Hilton Head
            </span>
            <Link href={EMapHrefToTitle["Order Now"]} target="_blank">
              <button
                className={
                  redRoseFont.className +
                  " py-3 px-16 max-w-fit bg-red-800 border-[1px] border-red-800 hover:border-white text-white text-2xl tracking-wide rounded hover:scale-105 active:scale-95 duration-300"
                }
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </Banner>

      <section className="flex min-w-60 mx-5 flex-col">
        <div className="bg-gray-300/[0.70] my-16">
          <div className=" flex justify-around xl:justify-evenly items-center lg:items-start mx-auto flex-col lg:flex-row py-10 sm:py-20 w-full sm:w-4/5 lg:min-w-[950px] lg:max-w-full xl:min-w-[1180px] xl:max-w-[1460px]">
            <div className="flex  w-5/6 sm:w-[560px] lg:w-[478px] xl:min-w-[655px] xl:pr-20 pb-10  lg:pr-3 lg:pt-3 xl:py-10 flex-col gap-6 xl:gap-8">
              <h1
                className={
                  redRoseFont.className + " text-5xl sm:text-6xl text-center"
                }
              >
                Bullies BBQ
              </h1>
              <p
                className={
                  redRoseFont.className + " text-2xl sm:text-3xl text-center"
                }
              >
                It&apos;s not just food its a way of life!
              </p>
              <div className="grid text-center text-base gap-4">
                <p>
                  Only the Freshest Lean Pork is &quot;Slow-Smoked&quot; over
                  Hickory and Mesquite woods. Bullies Ribs smoke for up to 6
                  hours and pork butt and briskets up to 14 hours in our large
                  capacity smoker.
                </p>
                <p>
                  Chef Bob Sutton is famous for his South Carolina Pulled Pork.
                  Served up dinner style or on a sandwich. Don&apos;t forget to
                  add a couple of &quot;bones&quot; of pure Memphis heaven.
                </p>
              </div>
              <div className="flex justify-center">
                <Link href={"/menu"}>
                  <button
                    className={
                      redRoseFont.className +
                      " py-2 px-10 mt-2 w-60 bg-red-800 border-black border-[1px] text-white text-xl tracking-wide rounded active:border-white hover:scale-105 active:scale-95 duration-300"
                    }
                  >
                    View Our Menu
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end max-w-[420px] xl:max-w-[520px] px-5">
              <img
                className="object-fill"
                src="/bullies-bbq-outside-view-1.png"
                alt="outside view bullies bbq restuarant"
              />
            </div>
          </div>
        </div>

        <HomePageMenuItems />

        <h2
          className={
            redRoseFont.className + " text-4xl sm:text-5xl text-center"
          }
        >
          Visit Us
        </h2>

        <div className="flex flex-col-reverse justify-between mx-auto lg:flex-row pb-20 pt-10 w-full lg:min-w-[950px] lg:max-w-full xl:max-w-[1640px]">
          <div className="flex justify-center flex-col pt-10  max-w-[310px]">
            <div
              className={`${redRoseFont.className} flex flex-col gap-5 sm:gap-6 text-base pb-10`}
            >
              <h3 className=" text-3xl text-red-800">Location</h3>
              <p>
                3 Regency Pkwy
                <br />
                Hilton Head Island, SC 29928
              </p>

              <p>
                Located 6/10&apos;s of a mile WEST of the Palmetto Dunes
                Entrance on Hwy 278, Turn at the Red Roof Inn.
              </p>
              <div className="py-2.5">
                <Link
                  href="https://maps.app.goo.gl/KzRmmANU2esut4J79"
                  target="_blank"
                >
                  <button
                    className={
                      redRoseFont.className +
                      " py-2 px-10 w-60 bg-red-800 border-black border-[1px] text-white text-xl tracking-wide rounded active:border-white hover:scale-105 active:scale-95 duration-300"
                    }
                  >
                    Get Directions
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${redRoseFont.className} flex flex-col gap-4 text-base`}
            >
              <h3 className="text-3xl text-red-800">Hours</h3>
              <StoreStatus />
              <p>
                Monday - Saturday:
                <br />
                11am - 8pm
              </p>
              <p>
                Sunday:
                <br />
                Closed
              </p>
            </div>
          </div>

          <div className="flex w-full lg:mx-w-[650px] xl:max-w-[1140px] lg:w-2/3 ">
            <iframe
              className="aspect-video h-full min-h-[545px] lg:min-h-[650px] max-h-[800px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13508.547583284142!2d-80.73426!3d32.173583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc7992c7d5ff67%3A0x2872397f8de93b33!2sBullies%20BBQ!5e0!3m2!1sen!2sus!4v1707822595985!5m2!1sen!2sus"
              width={"100%"}
              height={"100%"}
              style={{ border: "0" }}
              // allowfullscreen={false}
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
