import { Banner } from "../_components";
import { redRoseFont } from "../layout";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
              Bullies BBQ has been around for over 10 years, in 2023 the
              original owners retired and sold the company to Teamshares. The
              new president has not had time to work on a website refresh but
              would like to see the site redone as it is very dated and she can
              not get in to edit it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-6 gap-5 sm:gap-8 pb-10 sm:pb-20">
          <div className="flex flex-col items-center col-span-2 pb-5 sm:pb-10">
            <img
              src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
              alt=""
              className="w-[550px] lg:w-full lg:max-w-[550px] lg:min-w-60 pb-2.5 sm:pb-5"
            />
            <div className="px-5 sm:w-[500px] xl:w-[420px] grid gap-2 sm:gap-4">
              <h2 className={`${redRoseFont.className} text-4xl`}>
                Getting Started
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                magni minus beatae sit. Delectus fuga, quisquam repellendus{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-2 pb-5 sm:pb-10">
            <img
              src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
              alt=""
              className="w-[550px] lg:w-full lg:max-w-[550px] lg:min-w-60 pb-2.5 sm:pb-5"
            />
            <div className="px-5 sm:w-[500px] xl:w-[420px] grid gap-2 sm:gap-4">
              <h2 className={`${redRoseFont.className} text-4xl`}>
                Local Success
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                magni minus beatae sit. Delectus fuga, quisquam repellendus{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-2 pb-5 sm:pb-10">
            <img
              src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
              alt=""
              className="w-[550px] lg:w-full lg:max-w-[550px] lg:min-w-60 pb-2.5 sm:pb-5"
            />
            <div className="px-5 sm:w-[500px] xl:w-[420px] grid gap-2 sm:gap-4">
              <h2 className={`${redRoseFont.className} text-4xl sm:5xl`}>
                Employee Owned
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                magni minus beatae sit. Delectus fuga, quisquam repellendus{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
