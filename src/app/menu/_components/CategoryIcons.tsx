// "use client";

import { Category, IMenuItem } from "@/app/_utilities";
import { FaBurger } from "react-icons/fa6";
import { GiHotMeal, GiFrenchFries, GiCupcake } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";

export function CategoryIcons({ category }: { category: Category }) {
  switch (category) {
    case "sandwiches":
      return <FaBurger className="sm:hidden" size={35}></FaBurger>;
    case "dinners":
      return <GiHotMeal className="sm:hidden" size={35}></GiHotMeal>;
    case "sides":
      return <GiFrenchFries className="sm:hidden" size={35}></GiFrenchFries>;
    case "desserts":
      return <GiCupcake className="sm:hidden" size={35}></GiCupcake>;
    case "drinks":
      return <BsCupStraw className="sm:hidden" size={35}></BsCupStraw>;
    default:
      return <></>;
  }
}
