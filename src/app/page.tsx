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
        <div className="grid grid-cols-2 place-content-center gap-24">
          <img className="" src="/Bullies-BBQ-Name.png" alt="" />
          <div className="flex flex-col justify-evenly">
            <span className={redRoseFont.className + " text-white text-5xl"}>
              Barbecue in <br /> Hilton Head
            </span>
            <button className="py-4 px-16 max-w-fit bg-red-800 border-8 border-red-800 text-white text-4xl rounded hover:outline-8 hover:outline-red-800 hover:bg-white/80 hover:text-red-800 duration-300">
              Order Now!
            </button>
          </div>
        </div>
      </Banner>

      <div className="w-full py-10 flex flex-col items-center gap-16 bg-white">
        <img
          className="aspect-square duration-300 h-28"
          src="/Bullies-logo.png"
          alt=""
        />
        <span className="text-7xl text-center">Some Nice Words Here!</span>
        <p className="md:w-3/4 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          necessitatibus ipsam culpa iste facere, voluptatibus dolores nostrum
          aspernatur et, repudiandae voluptate dolor natus mollitia ipsa sed ad
          enim id repellendus!
        </p>
        <p className="md:w-3/4 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          necessitatibus ipsam culpa iste facere, voluptatibus dolores nostrum
          aspernatur et, repudiandae voluptate dolor natus mollitia ipsa sed ad
          enim id repellendus!
        </p>
        <button className=" text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white duration-300 py-4 px-2">
          CHECK OUT OUR MENU
        </button>
      </div>

      <HomePageMenuItems />

      <div className="aspect-video w-full md:w-3/4 flex flex-col justify-evenly">
        <span className="text-center text-6xl">Visit Us!</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13508.547583284142!2d-80.73426!3d32.173583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc7992c7d5ff67%3A0x2872397f8de93b33!2sBullies%20BBQ!5e0!3m2!1sen!2sus!4v1707822595985!5m2!1sen!2sus"
          width={"100%"}
          height={"75%"}
          style={{ border: "0" }}
          // allowfullscreen={false}
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
