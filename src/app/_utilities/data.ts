import {
  Category,
  CateringCategory,
  CateringItems,
  ICateringItems,
  IMenuItem,
  ISauce,
  Page,
} from ".";

export const pageNames: Page[] = [
  "Menu",
  "Catering",
  "Home",
  "About",
  "Sauces",
];

export const categories: Category[] = [
  "sandwiches",
  "dinners",
  "sides",
  "desserts",
  "sauces",
  "beer",
];

export const sauces: ISauce[] = [
  {
    name: "Texas Sweet",
    description: "Touches of Citrus, Pineapple & Brown Sugar",
    heat: 0,
  },
  {
    name: "Slow Burn",
    description: "Starts out Sweet and has a Slow Heat",
    heat: 2,
  },
  {
    name: "Original Mild Herb",
    description: "Vinegar base with Sweet Basil, Oregano & Rosemarry",
    heat: 0,
  },
  {
    name: "Carolina Mustard",
    description:
      "Traditional Vinegar base Mustard Sauce with a Touch of Pepper",
    heat: 1,
  },
  {
    name: "Carolina Vinegar",
    description: "Classic Carolina Vinegar, Slightly Peppery",
    heat: 1,
  },
];

export const cateringCategories: CateringCategory[] = [
  "ALA Carte & by Pound",
  "Family Dinners",
  "Sauces & Rubs",
];

export const cateringMenuList: ICateringItems[] = [
  {
    name: "1-pound Smoked Pulled Pork",
    price: 17.0,
    description: "1 Pound of Smoked Pulled Pork (Feeds 2-3 People)",
    category: "ALA Carte & by Pound",
    img: "/catering/pulled-pork.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-smoked-pulled-pork_18295f17-cb44-41c1-9eb6-796bea157a57",
  },
  {
    name: "1/2-pound Pork",
    price: 10.0,
    description: "1/2 Pound of Smoked Pulled Pork ",
    category: "ALA Carte & by Pound",
    img: "/catering/pulled-pork.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12pound-pork_fb7bfb45-af0b-46a9-94ac-e72666bf95e9",
  },
  {
    name: "1 Whole Smoked Chicken",
    price: 20.0,
    description:
      "This smoked whole chicken is Juicy, Delicious, and simply can't be beat.",
    category: "ALA Carte & by Pound",
    img: "/catering/1-whole-smoked-chicken.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1-whole-smoked-chicken_414aaa3c-dd0f-4a5a-b947-01845426a445",
  },
  {
    name: "1/2 Smoked Chicken",
    price: 12.0,
    description:
      "This smoked 1/2 chicken is Juicy, Delicious, and simply can't be beat.",
    category: "ALA Carte & by Pound",
    img: "/catering/half-smoked-chicken.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-smoked-chicken_0cbfdfe1-1aa0-4951-9d90-b18cfbc2a0c7",
  },
  {
    name: "1-pound Baked Potato Salad",
    price: 7.0,
    description:
      "Baked Potatoes, sour cream, bacon and chives. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-baked-potato-salad.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-baked-potato-salad_a6f9fffa-d0f9-46c4-adaf-0144dc00de1e",
  },
  {
    name: "1-pound Creamy Cole Slaw",
    price: 7.0,
    description: "Traditional Creamy Slaw. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",

    img: "/catering/1-pound-creamy-cole-slaw.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-creamy-cole-slaw_295dd48d-29f2-4e8c-a2f7-85fd6ec446cb",
  },
  {
    name: "1-pound Carolina Cole Slaw",
    price: 7.0,
    description: "Carolina Vinegar Based Slaw. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-carolina-cole-slaw.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-carolina-cole-slaw_894fe99a-0ecb-4ddc-94f6-899684f93ea6",
  },
  {
    name: "1-pound Green beans",
    price: 7.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-green-beans.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-green-beans_af5796fa-0eb9-484d-9a9a-d88344c22563",
  },
  {
    name: "1-pound Zesty 3 Bean Bake",
    price: 8.0,
    description: "Baked Beans Bullies Style. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-zesty-3-bean-bake.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-zesty-3-bean-bake_6e856b7d-6fe0-44e1-924d-bc72c0945499",
  },
  {
    name: "1-pound Mac & Cheese",
    price: 8.0,
    description: "Made with Smoked Guda Cheese, and Bacon. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-mac-&-cheese.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-mac-cheese_117ab635-c87c-4b6d-9de4-5573c9170ba5",
  },
  {
    name: "Brisket Chili",
    price: 10.0,
    description:
      "Homemade Chili with Smoked Brisket Burnt Ends paired with fresh Green Peppers, Onions, Diced Tomatoes, and Pinto Beans. Includes 2 pieces of Jalapeno Chedder Cornbread.",
    category: "ALA Carte & by Pound",
    img: "/catering/brisket-chili.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-brisket-chili_2c5fb402-ad76-4d3f-b675-99f7cb8a5452",
  },
  {
    name: "Jalapeno Cheddar Corn Bread (12 Pieces)",
    price: 12.0,
    description: "Baked fresh with Jalapeno peppers, and Chedder cheese",
    category: "ALA Carte & by Pound",
    img: "/catering/jalapeno-cheddar-corn-bread.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-jalapeno-chedder-corn-bread-12-pieces_aea062c2-6cd3-4b62-ae07-0795fcbfd8ab",
  },
  {
    name: "Rolls",
    price: 0.75,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/dinner-rolls.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-rolls_308028c1-58bc-4785-87b8-825b22418adb",
  },
  {
    name: "Rolls (6)",
    price: 4.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/dinner-rolls.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-rolls-6_9690a642-6a6d-421e-9c60-f2370ce8a361",
  },
  {
    name: "Rolls (12)",
    price: 9.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/dinner-rolls.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-rolls-12_38b3e9e1-5e10-49b4-a47c-7c86294d61bc",
  },
  {
    name: "Slider Rolls (12)",
    price: 5.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/slider-rolls.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-slider-rolls-12_56dc5571-d550-4d87-a34d-b4eac3ec835d",
  },
  {
    name: "Pickles 1 LB",
    price: 5.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/pickles-1-lb.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-pickles-1-lb_dfbb5523-5dac-46c6-a514-c4cf738e9d01",
  },
  {
    name: "Open Food",
    price: 16.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-open-food_ad41657c-0130-4ee8-b661-431c2ca8fca7",
  },
  {
    name: "1/2 pound Baked Potato Salad",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-baked-potato-salad_19f76cc2-5bf9-44ec-b39d-ce2135bc08b4",
  },
  {
    name: "1/2 Pound Creamy Cole Slaw",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-creamy-cole-slaw_8026c0db-1b3d-45d0-8cc6-7a406df921c6",
  },
  {
    name: "1/2 Pound Carolina Cole Slaw",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-carolina-cole-slaw_af4dfb20-dfd3-40ea-aa56-a06c74572364",
  },
  {
    name: "1/2 Pound Green Beans",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-green-beans_edc3077f-1b05-434d-b345-8aa1e908fb8a",
  },
  {
    name: "1/2 Pound Collard Greens",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-collard-greens_78e0b1b8-7dee-4b7a-9b43-233222c5f7e0",
  },
  {
    name: "1/2 Pound Zesty 3 Bean Bake",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-zesty-3-bean-bake_92635565-1c46-4085-9bc6-d36d2f72f616",
  },
  {
    name: "1/2 Pound Mac & Cheese",
    price: 5.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-mac-cheese_f89436ca-028f-4aad-967a-ab151b35299b",
  },
  {
    name: "1/2 Pound Brisket Chili",
    price: 6.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-brisket-chili_a2d0d1e7-9000-49c2-b763-a43000f278dd",
  },
  {
    name: "1/2 Pound Brunswick Stew",
    price: 6.5,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-brunswick-stew_742458e8-8bb9-4f1b-ae8c-e7dde4f7f37a",
  },
  {
    name: "Family Dinner for 2-3 People",
    price: 50.0,
    description:
      "Includes ribs, pulled pork, brisket, pulled chicken, jalapeno cheddar cornbread and your choice of 2 sides.",
    category: "Family Dinners",
    img: "/catering/family-dinner-1.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-family-dinner-for-23-people_3adfea65-0675-4b01-8bb2-a8406fff7c30",
  },
  {
    name: "Family Dinner for 4-6 People",
    price: 80.0,
    description:
      "Includes ribs, pulled pork, brisket, pulled chicken, jalapeno cheddar cornbread and your choice of 2 sides.",
    category: "Family Dinners",
    img: "/catering/family-dinner-2.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-family-dinner-for-46-people_bb9b2696-a340-4368-8948-5fb66a6546da",
  },
  {
    name: "Family Dinner for 8-10 People",
    price: 150.0,
    description:
      "Includes ribs, pulled pork, beef brisket, pulled chicken, jalapeno cheddar cornbread, and your choice of 2 sides.",
    category: "Family Dinners",
    img: "/catering/family-dinner-2.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-family-dinner-for-810-people_9a42d425-dc25-4020-859a-af1c75898449",
  },
  {
    name: "Rib Rub",
    price: 7.5,
    description: "",
    category: "Sauces & Rubs",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-rib-rub_979e1330-3d48-4404-bee2-f5ecc93e30a8",
  },
];

export const menuList: IMenuItem[] = [
  {
    prodId: 1,
    name: "Brisket Sandwich",
    price: 12.0,
    description:
      "Dive into a brisket sandwich: tender, slow-smoked brisket hugged by a toasted bun. It's a meaty masterpiece, pure and simple.",
    category: "sandwiches",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001534292476_1683832386.jpg?size=medium",
  },
  {
    prodId: 2,
    name: "Pulled Pork Sandwich",
    price: 10.0,
    description:
      "Savor the essence of Southern comfort with a pulled pork sandwich. Tender strands of slow-cooked pork, piled high atop a soft bun. It's a flavor-packed journey to BBQ heaven in every bite.",
    category: "sandwiches",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
  },
  {
    prodId: 3,
    name: "Pulled Chicken Sandwich",
    price: 9.5,
    description:
      "Delight in the lighter side of barbecue with a pulled chicken sandwich. Succulent shredded chicken, nestled within a fluffy bun. It's a delightful twist on a classic favorite, perfect as a lighter but equally satisfying option.",
    category: "sandwiches",
    img: "https://images-ext-2.discordapp.net/external/5UljIDiN-mKkEbeel4KEtVOSkMmKFCvoMtu9KRpri0s/https/img.cdn4dd.com/cdn-cgi/image/fit%3Dcontain%2Cwidth%3D1200%2Cheight%3D672%2Cformat%3Dauto/https%3A/doordash-static.s3.amazonaws.com/media/photosV2/3bf86092-97f8-4121-9589-c9b314d65915-retina-large.jpg?format=webp&width=1087&height=611",
  },
  {
    prodId: 4,
    name: "Pulled Pork Dinner",
    price: 21.0,
    description:
      "Enjoy the savory goodness of a pulled pork dinner, featuring tender, succulent pork infused with smoky flavors. It's a meal that's sure to satisfy your cravings for classic barbecue taste.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022164_1683832820.jpg?size=medium",
  },
  {
    prodId: 5,
    name: "Brisket Dinner",
    price: 24.0,
    description:
      "Savor the rich flavors of a brisket dinner, featuring tender slices of slow-smoked brisket. It's a hearty delight that promises pure satisfaction with every bite.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
  },
  {
    prodId: 6,
    name: "Pulled Chicken Dinner",
    price: 20.0,
    description:
      "Delight in a pulled chicken dinner, boasting juicy, flavorful chicken cooked to perfection. It's a lighter option that doesn't skimp on taste, offering a delicious twist on traditional barbecue fare.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
  },
  {
    prodId: 7,
    name: "Half Chicken Dinner",
    price: 16.5,
    description:
      "1/2 Chicken dinner comes with 1 1/2 smoked Chicken and your choice of 2 sides.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022156_1683221729.jpg?size=medium",
  },
  {
    prodId: 8,
    name: "Half Slab Dinner",
    price: 25.0,
    description:
      "Indulge in barbecue bliss with a half slab rib dinner, showcasing tender ribs smothered in mouthwatering sauce. It's a finger-licking feast that'll leave you craving more.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022162_1683136793.jpg?size=medium",
  },
  {
    prodId: 9,
    name: "Full Slab Dinner",
    price: 33.0,
    description:
      "Treat yourself to the ultimate barbecue experience with a full slab rib dinner, featuring a generous portion of fall-off-the-bone ribs. It's a hearty meal that's perfect for satisfying even the heartiest appetites.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/0/item-800000001525022160_1683130037.jpg?size=medium",
  },
  {
    prodId: 10,
    name: "Bull Dog\n(2 Meat Combo)",
    price: 24.0,
    description:
      "Your choice of any 2 meats! All Dinners Include 2 Sides! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022172_1683238227.jpg?size=medium",
  },
  {
    prodId: 11,
    name: "Baked Potato Salad",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022192_1683063453.jpg?size=medium",
  },
  {
    prodId: 12,
    name: "Creamy Cole Slaw",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022194_1683063468.jpg?size=medium",
  },
  {
    prodId: 13,
    name: "Carolina Cole Slaw",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022196_1683117385.jpg?size=medium",
  },
  {
    prodId: 14,
    name: "Zesty 3 Bean Bake",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/8/item-800000001525022198_1683135224.jpg?size=medium",
  },
  {
    prodId: 15,
    name: "Collard Greens",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/9/item-800000001534426489_1683063283.jpg?size=medium",
  },
  {
    prodId: 16,
    name: "Mac & Cheese",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022452_1683135770.jpg?size=medium",
  },
  {
    prodId: 17,
    name: "Jalapeno Corn Bread",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/3/item-800000001534426493_1683064245.jpg?size=medium",
  },
  {
    prodId: 18,
    name: "Green Beans",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/0/item-800000002863697770_1687972312.jpg?size=medium",
  },
  {
    prodId: 19,
    name: "Brownie",
    price: 2.0,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "desserts",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/5/item-800000001525022625_1683130949.jpg?size=medium",
  },
  {
    prodId: 20,
    name: "Fries",
    price: 4.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
  },
  {
    prodId: 21,
    name: "Brisket Chili",
    price: 5.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022456_1685390999.jpg?size=medium",
  },
  {
    prodId: 22,
    name: "Brunswick Stew",
    price: 5.5,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio vitae fugiat rem cupiditate voluptate qui iste laborum est necessitatibus. Aliquam vero modi fugiat possimus perspiciatis optio placeat facere saepe.",
    category: "sides",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022172_1683238227.jpg?size=medium",
  },
];
