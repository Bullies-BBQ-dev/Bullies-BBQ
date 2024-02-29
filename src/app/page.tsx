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
        <div className="grid md:grid-cols-2 place-content-center gap-1 sm:gay-4 md:gap-16 lg:gap-24">
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

      <div className="flex min-w-60 mx-5 flex-col">
        <div className="w-full py-10 sm:py-20 flex flex-col items-center gap-16 bg-white">
          <div className="">
            <img
              className="aspect-square duration-300 object-contain h-60"
              src="/bullie-full-body.png"
              alt=""
            />
          </div>

          <h1
            className={
              redRoseFont.className + " text-5xl sm:text-6xl text-center"
            }
          >
            Bullies BBQ
          </h1>
          <div className="md:w-3/4 text-center text-base">
            <p>
              Only the Freshest Lean Pork is "Slow-Smoked" over Hickory and
              Mesquite woods. Bullies Ribs smoke for up to 6 hours and pork butt
              and briskets up to 14 hours in our large capacity smoker.
              <br />
              <br />
              Chef Bob Sutton is famous for his South Carolina Pulled Pork.
              Served up dinner style or on a sandwich. Don't forget to add a
              couple of "bones" of pure Memphis heaven.
            </p>
          </div>

          <button className=" text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white duration-300 py-4 px-2">
            VIEW OUR MENU
          </button>
        </div>

        <HomePageMenuItems />

        <h2
          className={
            redRoseFont.className +
            " text-4xl sm:text-5xl pb-2.5 sm:pb-5 text-center"
          }
        >
          Visit Us
        </h2>

        <div className="xl:mx-54 lg:mx-20">
          <iframe
            className="aspect-video w-full h-full min-h-[545px] max-h-[800px] pb-10 sm:pb-28 md:px-20 sm:px-10"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13508.547583284142!2d-80.73426!3d32.173583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc7992c7d5ff67%3A0x2872397f8de93b33!2sBullies%20BBQ!5e0!3m2!1sen!2sus!4v1707822595985!5m2!1sen!2sus"
            width={"100%"}
            height={"75%"}
            style={{ border: "0" }}
            // allowfullscreen={false}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
