import { HomePageMenuItems, NavBar, Banner } from "./_components";
import { redRoseFont } from "./layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <NavBar /> */}

      <Banner
        backgroundURL={
          "https://destination-bbq.com/wp-content/uploads/2015/04/Bullies-Interior-1024x576.jpg.webp"
        }
      >
        <div className="grid md:grid-cols-2 place-content-center gap-1 sm:gap-4 md:gap-16 lg:gap-24">
          <img className="" src="/Bullies-BBQ-Name.png" alt="" />
          <div className="flex flex-col justify-center items-center md:items-start">
            <span
              className={
                redRoseFont.className +
                " text-white text-3xl py-2 tracking-wide"
              }
            >
              Barbecue in <br /> Hilton Head
            </span>
            <button
              className={
                redRoseFont.className +
                " py-3 px-16 max-w-fit bg-red-800 border-4 border-red-800 text-white text-2xl tracking-wide rounded hover:outline-8 hover:outline-red-800 hover:bg-white/80 hover:text-red-800 duration-300"
              }
            >
              Order Now
            </button>
          </div>
        </div>
      </Banner>

      <section className="flex min-w-60 mx-5 flex-col">
        <div className="flex justify-around xl:justify-evenly items-center lg:items-start mx-auto flex-col lg:flex-row py-10 sm:py-20 w-full sm:w-4/5 lg:min-w-[950px] lg:max-w-full xl:max-w-[1800px]">
          <div className="flex w-5/6 sm:w-full lg:w-1/2 xl:w-4/5 lg:max-w-[650px] lg:px-10 xl:px-20 pb-10 lg:py-10 flex-col gap-6">
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
              It's not just food its a way of life!
            </p>
            <div className="grid text-center text-base gap-4">
              <p>
                Only the Freshest Lean Pork is "Slow-Smoked" over Hickory and
                Mesquite woods. Bullies Ribs smoke for up to 6 hours and pork
                butt and briskets up to 14 hours in our large capacity smoker.
              </p>
              <p>
                Chef Bob Sutton is famous for his South Carolina Pulled Pork.
                Served up dinner style or on a sandwich. Don't forget to add a
                couple of "bones" of pure Memphis heaven.
              </p>
            </div>
          </div>{" "}
          <div className="flex justify-center lg:justify-end max-w-[420px] xl:max-w-[600px]">
            <img
              className="object-fill"
              src="/outside-view.png"
              alt="outside view bullies bbq restuarant"
            />
          </div>
        </div>

        <div className="flex justify-center pb-10 sm:pb-20">
          <button className=" text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white duration-300 py-4 px-2">
            VIEW OUR MENU
          </button>
        </div>

        <HomePageMenuItems />

        <h2
          className={
            redRoseFont.className +
            " text-4xl sm:text-5xl text-center text-black sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow-600"
          }
        >
          Visit Us
        </h2>

        <div className="flex flex-col justify-evenly mx-auto lg:flex-row pb-20 pt-10 w-full lg:min-w-[950px] lg:max-w-full xl:max-w-[1640px]">
          <div className="flex w-1/3 justify-center flex-col pb-10 px-5 w-[310px]">
            <div className="pb-10">
              <h3
                className={
                  redRoseFont.className + " text-3xl py-2.5 text-red-800"
                }
              >
                Location
              </h3>
              <p className={redRoseFont.className + " text-base py-2.5"}>
                3 Regency Pkwy
                <br />
                Hilton Head Island, SC 29928
              </p>
              <p className={redRoseFont.className + " text-base py-2.5"}>
                Located 6/10's of a mile WEST of the Palmetto Dunes Entrance on
                Hwy 278, Turn at the Red Roof Inn.
              </p>
              <div className="py-2.5">
                <button
                  className={
                    redRoseFont.className +
                    " py-2 px-10 w-56 bg-red-800 border-black border-2 hover:border-red-800 text-white text-1xl tracking-wide rounded hover:outline-8 hover:outline-red-800 hover:bg-white/80 hover:text-red-800 duration-300"
                  }
                >
                  Get Directions
                </button>
              </div>
            </div>
            <div>
              <h3
                className={
                  redRoseFont.className + " text-3xl py-2.5 text-red-800"
                }
              >
                Hours
              </h3>
              <p className={redRoseFont.className + " text-base py-2.5"}>
                Monday - Saturday:
                <br />
                11am - 8pm
                <br />
                <br />
                Sunday:
                <br />
                Closed
              </p>
            </div>
          </div>

          <div className="flex w-full lg:mx-w-[650px] xl:max-w-[1140px] lg:w-2/3 lg:pr-5">
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
