import { HomeMenuProps, homePageMenuList } from "../_utilities";
import Image from "next/image";
export function HomePageMenuItems() {
  const mapMenuItems = (menuItem: HomeMenuProps) => {
    return <HomePageMenuItem menuItem={menuItem} key={menuItem.prodId} />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10 sm:pb-20">
      {homePageMenuList.map(mapMenuItems)}
    </div>
  );
}

function HomePageMenuItem({ menuItem }: { menuItem: HomeMenuProps }) {
  return (
    <div className="relative">
      <div className="absolute bg-black/70 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-500">
        <span className="text-white text-3xl text-center w-4/5 cursor-default">
          {menuItem.name}
        </span>
      </div>
      <Image
        className="aspect-square w-full object-cover"
        width={300}
        height={300}
        src={menuItem.img}
        alt={`${menuItem}`}
      />
    </div>
  );
}
