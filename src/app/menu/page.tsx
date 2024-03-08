import Image from "next/image";
import { Banner } from "../_components";
import { MenuItems } from "./_components";
import { redRoseFont } from "../layout";

export default function Menu() {
  return (
    <main
      className="flex min-h-screen flex-col items-center"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      //   backgroundSize: "contain",
      // }}
    >
      <Banner backgroundURL={"/banner/menu.jpg"} title={"Menu"}></Banner>
      <MenuItems redRoseFont={redRoseFont} />
    </main>
  );
}
