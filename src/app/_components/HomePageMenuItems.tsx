export function HomePageMenuItems() {
  const menuItems = [
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022462_1683134550.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/3/item-800000001534426493_1683064245.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022456_1685390999.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022156_1683221729.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022162_1683136793.jpg?size=medium",
    "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022172_1683238227.jpg?size=medium",
    "https://destination-bbq.com/wp-content/uploads/2015/04/Full-Slab-Dinner-Patty-Ricalton-1024x768.jpg.webp",
  ];
  const mapMenuItems = (menuItem: string) => {
    return <HomePageMenuItem menuItem={menuItem} key={menuItem} />;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {menuItems.map(mapMenuItems)}
    </div>
  );
}

function HomePageMenuItem({ menuItem }: { menuItem: string }) {
  return (
    <div className="relative">
      <div className="absolute bg-black/70 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-500">
        <span className="text-white text-5xl text-center w-4/5">
          Name of this menu item
        </span>
      </div>
      <img
        className="aspect-square w-full object-cover"
        src={menuItem}
        alt={`${menuItem}`}
      />
    </div>
  );
}
