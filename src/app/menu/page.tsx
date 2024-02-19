import Image from "next/image";
import { Banner } from "../_components";
import { MenuItems } from "./_components";
import { redRoseFont } from "../layout";

export default function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner
        backgroundURL={
          "https://destination-bbq.com/wp-content/uploads/2015/04/Full-Slab-Dinner-Patty-Ricalton-1024x768.jpg.webp"
        }
        title={"Menu"}
      ></Banner>
      <MenuItems redRoseFont={redRoseFont} />
    </main>
  );
}
