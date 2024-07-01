// "use client";

import { Category, IMenuItem } from "@/app/_utilities";
import { FaBurger } from "react-icons/fa6";
import { GiHotMeal, GiFrenchFries, GiCupcake } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { LuSoup } from "react-icons/lu";
import { TbMoodKid } from "react-icons/tb";

export function CategoryIcons({ category }: { category: Category }) {
  switch (category) {
    case "sandwiches":
      return <FaBurger className="sm:hidden" size={35}></FaBurger>;
    case "dinners":
      return <GiHotMeal className="sm:hidden" size={35}></GiHotMeal>;
    case "sides":
      return <GiFrenchFries className="sm:hidden" size={35}></GiFrenchFries>;
    case "soups":
      return <LuSoup className="sm:hidden" size={35}></LuSoup>;
    case "drinks":
      return <BsCupStraw className="sm:hidden" size={35}></BsCupStraw>;
    case "kids":
      return <TbMoodKid className="sm:hidden" size={35}></TbMoodKid>;
    default:
      return <></>;
  }
}
