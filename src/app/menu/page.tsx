import { Red_Rose } from "next/font/google";
import { Banner } from "../_components";
import { MenuItems } from "./_components";
import { Suspense } from "react";
const redRoseFont = Red_Rose({
  weight: "400",
  subsets: ["latin"],
});

export default function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner backgroundURL={"/banner/menu.jpg"} title={"Menu"}></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <MenuItems redRoseFont={redRoseFont} />
      </Suspense>
    </main>
  );
}
