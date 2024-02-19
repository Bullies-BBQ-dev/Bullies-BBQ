import { Banner } from "../_components";
import { redRoseFont } from "../layout";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner
        backgroundURL="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
        title="About Us"
      />
      <section className="text-center max-w-screen-xl">
        <h1 className={`${redRoseFont.className} text-7xl py-10`}>Our Story</h1>
        <p className="m-auto max-w-screen-md">
          Bullies BBQ has been around for over 10 years, in 2023 the original
          owners retired and sold the company to Teamshares. The new president
          has not had time to work on a website refresh but would like to see
          the site redone as it is very dated and she can not get in to edit it.
        </p>
        <div className="grid grid-cols-3 gap-4 py-10">
          <div className="flex flex-col items-center">
            <img
              src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
              alt=""
            />
            <span className={`${redRoseFont.className} text-4xl py-4`}>
              We're Bullies!
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              magni minus beatae sit. Delectus fuga, quisquam repellendus{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
              alt=""
            />
            <span className={`${redRoseFont.className} text-4xl py-4`}>
              We're Bullies!
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              magni minus beatae sit. Delectus fuga, quisquam repellendus{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium"
              alt=""
            />
            <span className={`${redRoseFont.className} text-4xl py-4`}>
              We're Bullies!
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              magni minus beatae sit. Delectus fuga, quisquam repellendus{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
