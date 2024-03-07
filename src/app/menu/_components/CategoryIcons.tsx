// "use client";

import { Category, IMenuItem } from "@/app/_utilities";
// import { useState } from "react";
// import { menuList, categories } from "@/app/_utilities";
// import { NextFont } from "next/dist/compiled/@next/font";
import { FaBurger } from "react-icons/fa6";
import { GiHotMeal, GiFrenchFries, GiCupcake } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { IoBeer } from "react-icons/io5";

export function CategoryIcons({ category }: { category: Category }) {
  // const [currentCategory, setCurrentCategory] = useState<Category>(null);
  switch (category) {
    case "sandwiches":
      return <FaBurger className="sm:hidden" size={35}></FaBurger>;
    case "dinners":
      return <GiHotMeal className="sm:hidden" size={35}></GiHotMeal>;
    case "sides":
      return <GiFrenchFries className="sm:hidden" size={35}></GiFrenchFries>;
    case "desserts":
      return <GiCupcake className="sm:hidden" size={35}></GiCupcake>;
    case "sauces":
      return <BsCupStraw className="sm:hidden" size={35}></BsCupStraw>;
    case "beer":
      return <IoBeer className="sm:hidden" size={35}></IoBeer>;
    default:
      return <></>;
  }
}
