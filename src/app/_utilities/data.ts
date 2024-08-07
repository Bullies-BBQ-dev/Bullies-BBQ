import {
  Category,
  CateringCategory,
  CateringItems,
  ICateringItems,
  IMenuItem,
  ISauce,
  Page,
  ReviewsProps,
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
  "soups",
  "kids",
  "drinks",
];

export const sauces: ISauce[] = [
  {
    name: "Texas Sweet",
    description: "Touches of Citrus, Pineapple & Brown Sugar",
    heat: 0,
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
  {
    name: "Slow Burn",
    description: "Starts out Sweet and has a Slow Heat",
    heat: 2,
  },
];

export const cateringCategories: CateringCategory[] = [
  "ALA Carte & by Pound",
  "Family Dinners",
  "Sauces & Rubs",
];
// Confirm if commented out items are no longer being served. If so, deleted commented out code.
export const cateringMenuList: ICateringItems[] = [
  {
    name: "1 Pound Smoked Pulled Pork",
    price: 18.0,
    description: "1 Pound of Smoked Pulled Pork (Feeds 2-3 People)",
    category: "ALA Carte & by Pound",
    img: "/catering/pulled-pork.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-smoked-pulled-pork_18295f17-cb44-41c1-9eb6-796bea157a57",
  },
  // {
  //   name: "1/2-pound Smoked Pulled Pork",
  //   price: 10.0,
  //   description: "1/2 Pound of Smoked Pulled Pork ",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/pulled-pork.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-12pound-pork_fb7bfb45-af0b-46a9-94ac-e72666bf95e9",
  // },
  {
    name: "1 Whole Smoked Chicken",
    price: 24.0,
    description:
      "This smoked whole chicken is Juicy, Delicious, and simply can't be beat.",
    category: "ALA Carte & by Pound",
    img: "/catering/1-whole-smoked-chicken.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1-whole-smoked-chicken_414aaa3c-dd0f-4a5a-b947-01845426a445",
  },
  // {
  //   name: "1/2 Smoked Chicken",
  //   price: 12.0,
  //   description:
  //     "This smoked 1/2 chicken is Juicy, Delicious, and simply can't be beat.",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/half-smoked-chicken.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-12-smoked-chicken_0cbfdfe1-1aa0-4951-9d90-b18cfbc2a0c7",
  // },
  {
    name: "1 Pound Baked Potato Salad",
    price: 8.0,
    description:
      "Baked Potatoes, sour cream, bacon and chives. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-baked-potato-salad.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-baked-potato-salad_a6f9fffa-d0f9-46c4-adaf-0144dc00de1e",
  },
  {
    name: "1 Pound Creamy Cole Slaw",
    price: 8.0,
    description: "Traditional Creamy Slaw. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",

    img: "/catering/1-pound-creamy-cole-slaw.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-creamy-cole-slaw_295dd48d-29f2-4e8c-a2f7-85fd6ec446cb",
  },
  {
    name: "1 Pound Carolina Cole Slaw",
    price: 8.0,
    description: "Carolina Vinegar Based Slaw. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-carolina-cole-slaw.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-carolina-cole-slaw_894fe99a-0ecb-4ddc-94f6-899684f93ea6",
  },
  {
    name: "1 Pound Green beans",
    price: 8.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-green-beans.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-green-beans_af5796fa-0eb9-484d-9a9a-d88344c22563",
  },
  {
    name: "1 Pound Zesty 3 Bean Bake",
    price: 8.0,
    description: "Baked Beans Bullies Style. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-zesty-3-bean-bake.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-zesty-3-bean-bake_6e856b7d-6fe0-44e1-924d-bc72c0945499",
  },
  {
    name: "1 Pound Double Cheddar Mac",
    price: 8.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-mac-&-cheese.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-mac-cheese_117ab635-c87c-4b6d-9de4-5573c9170ba5",
  },
  {
    name: "1 Pound Bacon Gouda Mac",
    price: 8.0,
    description: "Made with Smoked Guda Cheese, and Bacon. (Feeds 2-3 people)",
    category: "ALA Carte & by Pound",
    img: "/catering/1-pound-mac-&-cheese.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-1pound-mac-cheese_117ab635-c87c-4b6d-9de4-5573c9170ba5",
  },
  {
    name: "1 Pound Brisket Chili",
    price: 12.0,
    description:
      "Homemade Chili with Smoked Brisket Burnt Ends paired with fresh Green Peppers, Onions, Diced Tomatoes, and Pinto Beans. Includes 2 pieces of Jalapeno Chedder Cornbread.",
    category: "ALA Carte & by Pound",
    img: "/catering/brisket-chili.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-brisket-chili_2c5fb402-ad76-4d3f-b675-99f7cb8a5452",
  },
  // {
  //   name: "Jalapeno Cheddar Corn Bread (12 Pieces)",
  //   price: 12.0,
  //   description: "Baked fresh with Jalapeno peppers, and Chedder cheese",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/jalapeno-cheddar-corn-bread.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-jalapeno-chedder-corn-bread-12-pieces_aea062c2-6cd3-4b62-ae07-0795fcbfd8ab",
  // },
  // {
  //   name: "Rolls",
  //   price: 0.75,
  //   description: "",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/dinner-rolls.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-rolls_308028c1-58bc-4785-87b8-825b22418adb",
  // },
  // {
  //   name: "Rolls (6)",
  //   price: 4.5,
  //   description: "",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/dinner-rolls.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-rolls-6_9690a642-6a6d-421e-9c60-f2370ce8a361",
  // },
  // {
  //   name: "Rolls (12)",
  //   price: 9.0,
  //   description: "",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/dinner-rolls.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-rolls-12_38b3e9e1-5e10-49b4-a47c-7c86294d61bc",
  // },
  // {
  //   name: "Slider Rolls (12)",
  //   price: 5.0,
  //   description: "",
  //   category: "ALA Carte & by Pound",
  //   img: "/catering/slider-rolls.jpeg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-slider-rolls-12_56dc5571-d550-4d87-a34d-b4eac3ec835d",
  // },
  {
    name: "Pickles 1 LB",
    price: 5.0,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/catering/pickles-1-lb.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-pickles-1-lb_dfbb5523-5dac-46c6-a514-c4cf738e9d01",
  },
  {
    name: "2 pounds Baked Potato Salad",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-baked-potato-salad_19f76cc2-5bf9-44ec-b39d-ce2135bc08b4",
  },
  {
    name: "2 Pounds Creamy Cole Slaw",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-creamy-cole-slaw_8026c0db-1b3d-45d0-8cc6-7a406df921c6",
  },
  {
    name: "2 Pounds Carolina Cole Slaw",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-carolina-cole-slaw_af4dfb20-dfd3-40ea-aa56-a06c74572364",
  },
  {
    name: "2 Pounds Green Beans",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-green-beans_edc3077f-1b05-434d-b345-8aa1e908fb8a",
  },
  {
    name: "2 Pounds Collard Greens",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-collard-greens_78e0b1b8-7dee-4b7a-9b43-233222c5f7e0",
  },
  {
    name: "2 Pounds Zesty 3 Bean Bake",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-zesty-3-bean-bake_92635565-1c46-4085-9bc6-d36d2f72f616",
  },
  {
    name: "2 Pounds Double Cheddar Mac",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-mac-cheese_f89436ca-028f-4aad-967a-ab151b35299b",
  },
  {
    name: "2 Pounds Bacon Gouda Mac",
    price: 12,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-mac-cheese_f89436ca-028f-4aad-967a-ab151b35299b",
  },
  {
    name: "2 Pounds Brisket Chili",
    price: 15,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-brisket-chili_a2d0d1e7-9000-49c2-b763-a43000f278dd",
  },
  {
    name: "2 Pounds Brunswick Stew",
    price: 15,
    description: "",
    category: "ALA Carte & by Pound",
    img: "/Bullies-logo.png",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-pound-brunswick-stew_742458e8-8bb9-4f1b-ae8c-e7dde4f7f37a",
  },
  {
    name: "Family Dinner for 3-5 People",
    price: 60.0,
    description:
      "Includes ribs, pulled pork, brisket, pulled chicken, jalapeno cheddar cornbread and your choice of 2 sides.",
    category: "Family Dinners",
    img: "/catering/family-dinner-1.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-family-dinner-for-23-people_3adfea65-0675-4b01-8bb2-a8406fff7c30",
  },
  {
    name: "Family Dinner for 6-8 People",
    price: 100.0,
    description:
      "Includes ribs, pulled pork, brisket, pulled chicken, jalapeno cheddar cornbread and your choice of 2 sides.",
    category: "Family Dinners",
    img: "/catering/family-dinner-2.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-family-dinner-for-46-people_bb9b2696-a340-4368-8948-5fb66a6546da",
  },
  {
    name: "Family Dinner for 9-11 People",
    price: 170.0,
    description:
      "Includes ribs, pulled pork, beef brisket, pulled chicken, jalapeno cheddar cornbread, and your choice of 2 sides.",
    category: "Family Dinners",
    img: "/catering/family-dinner-2.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-family-dinner-for-810-people_9a42d425-dc25-4020-859a-af1c75898449",
  },
  {
    name: "Rib Rub",
    price: 7,
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
    price: 14.0,
    description:
      "Dive into a brisket sandwich: tender, slow-smoked brisket hugged by a toasted bun. It's a meaty masterpiece, pure and simple.",
    category: "sandwiches",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001534292476_1683832386.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-j-brisket-sandwich-combo-34-lb_a3f3e0a3-dee6-48e1-b78e-6f3b82b5de59",
  },
  {
    prodId: 2,
    name: "Pork Sandwich",
    price: 12.0,
    description:
      "Savor the essence of Southern comfort with a pork sandwich. Tender strands of slow-cooked pork, piled high atop a soft bun. It's a flavor-packed journey to BBQ heaven in every bite.",
    category: "sandwiches",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-j-pulled-pork-sandwich-combo-34-lb_200fdb47-0f2d-4ac3-9ef8-d35043be3901",
  },
  {
    prodId: 3,
    name: "Chicken Sandwich",
    price: 12,
    description:
      "Delight in the lighter side of barbecue with a chicken sandwich. Succulent shredded chicken, nestled within a fluffy bun. It's a delightful twist on a classic favorite, perfect as a lighter but equally satisfying option.",
    category: "sandwiches",
    img: "https://images-ext-2.discordapp.net/external/5UljIDiN-mKkEbeel4KEtVOSkMmKFCvoMtu9KRpri0s/https/img.cdn4dd.com/cdn-cgi/image/fit%3Dcontain%2Cwidth%3D1200%2Cheight%3D672%2Cformat%3Dauto/https%3A/doordash-static.s3.amazonaws.com/media/photosV2/3bf86092-97f8-4121-9589-c9b314d65915-retina-large.jpg?format=webp&width=1087&height=611",
  },
  {
    prodId: 4,
    name: "Pulled Pork Dinner",
    price: 23.0,
    description:
      "Enjoy the savory goodness of a pulled pork dinner, featuring tender, succulent pork infused with smoky flavors. It's a meal that's sure to satisfy your cravings for classic barbecue taste.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022164_1683832820.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-pulled-pork-dinner_0f52cd74-8c4a-4cf0-8d62-052394188357",
  },
  // {
  //   prodId: 5,
  //   name: "Brisket Dinner",
  //   price: 24.0,
  //   description:
  //     "Savor the rich flavors of a brisket dinner, featuring tender slices of slow-smoked brisket. It's a hearty delight that promises pure satisfaction with every bite.",
  //   category: "dinners",
  //   img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
  // },
  // {
  //   prodId: 6,
  //   name: "Pulled Chicken Dinner",
  //   price: 20.0,
  //   description:
  //     "Delight in a pulled chicken dinner, boasting juicy, flavorful chicken cooked to perfection. It's a lighter option that doesn't skimp on taste, offering a delicious twist on traditional barbecue fare.",
  //   category: "dinners",
  //   img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022044_1683832343.jpg?size=medium",
  // },
  {
    prodId: 7,
    name: "Half Smoked Chicken Dinner",
    price: 18,
    description:
      "1/2 Chicken dinner comes with 1 1/2 smoked Chicken and your choice of 2 sides.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022156_1683221729.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-smoked-chicken-dinner_ff2eceb9-6749-4deb-9618-27e8a8c9c175",
  },
  {
    prodId: 8,
    name: "Half Slab Dinner",
    price: 26.0,
    description:
      "Indulge in barbecue bliss with a half slab rib dinner, showcasing tender ribs smothered in mouthwatering sauce. It's a finger-licking feast that'll leave you craving more.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022162_1683136793.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-12-slab-dinner_9cbec28f-ed10-4e29-a1de-a899961f9569",
  },
  {
    prodId: 9,
    name: "Full Slab Dinner",
    price: 36.0,
    description:
      "Treat yourself to the ultimate barbecue experience with a full slab rib dinner, featuring a generous portion of fall-off-the-bone ribs. It's a hearty meal that's perfect for satisfying even the heartiest appetites.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/0/item-800000001525022160_1683130037.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-full-slab-dinner_18725acc-6c85-42f0-bf2c-1075db286ba4",
  },
  // {
  //   prodId: 10,
  //   name: "Bull Dog\n(2 Meat Combo)",
  //   price: 24.0,
  //   description:
  //     "Your choice of any 2 meats to satisfy your barbecue cravings! A mouthwatering feast featuring a tantalizing selection of two smoky, succulent meats. Whether it's tender brisket, juicy pulled pork, or savory ribs, paired with your favorite sides, it's a flavorful journey that promises to leave you fully satisfied.",
  //   category: "dinners",
  //   img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022172_1683238227.jpg?size=medium",
  // },
  {
    prodId: 11,
    name: "Baked Potato Salad",
    price: 5,
    description:
      "Indulge in the comforting flavors of baked potato salad, featuring tender potatoes mixed with creamy dressing and savory seasonings. It's a satisfying side dish that pairs perfectly with any meal.",
    category: "sides",
    img: "/catering/1-pound-baked-potato-salad.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-baked-potato-salad_b06fab5c-f944-4b6b-8ba8-9d53d461b93b",
  },
  {
    prodId: 12,
    name: "Creamy Coleslaw",
    price: 5,
    description:
      "Savor the classic taste of creamy coleslaw, with crisp cabbage and carrots tossed in a creamy, tangy dressing. It's a refreshing complement to any barbecue feast.",
    category: "sides",
    img: "/catering/1-pound-creamy-cole-slaw.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-creamy-cole-slaw_0ad6b84f-5a91-49b7-a05b-ee729a43ab8f",
  },
  {
    prodId: 13,
    name: "Carolina Coleslaw",
    price: 5,
    description:
      "Experience the tangy kick of Carolina coleslaw, featuring shredded cabbage and a zesty vinegar-based dressing. It's a bright and flavorful side that adds a refreshing contrast to your plate.",
    category: "sides",
    img: "/catering/1-pound-carolina-cole-slaw.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-carolina-cole-slaw_ca84d06e-c9de-40a1-92a3-5df039b629c3",
  },
  {
    prodId: 14,
    name: "Zesty 3 Bean Bake",
    price: 5,
    description:
      "Delight in the robust flavors of zesty three bean bake, a hearty combination of beans cooked with savory spices and tangy sauce. It's a flavorful side dish that's sure to please.",
    category: "sides",
    img: "/catering/1-pound-zesty-3-bean-bake.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-zesty-3-bean-bake_17cb6d73-ff14-48de-bcf0-307094d9fc3d",
  },
  {
    prodId: 15,
    name: "Kickin' Collard Greens",
    price: 5,
    description:
      "Treat your taste buds to the Southern comfort of collard greens, slow-cooked to perfection with savory seasonings. It's a soulful side dish that's both hearty and delicious.",
    category: "sides",
    img: "/catering/collard-greens.jpg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-collard-greens_d0ea0ed9-833e-4870-b600-3b3444bf84c0",
  },
  {
    prodId: 16,
    name: "Double Cheddar Mac",
    price: 5,
    description:
      "Indulge in the creamy goodness of mac and cheese, featuring tender pasta smothered in rich, cheesy cheddar sauce. It's a timeless classic that's sure to be a hit with everyone at the table.",
    category: "sides",
    img: "/catering/1-pound-mac-&-cheese.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-mac-cheese_ec882917-4b6d-45d0-8135-1797b3098baa",
  },
  {
    prodId: 17,
    name: "Bacon Gouda Mac",
    price: 5,
    description:
      "Indulge in the creamy goodness of mac and cheese, featuring tender pasta smothered in smoked guda cheese and bacon. It's a timeless classic that's sure to be a hit with everyone at the table.",
    category: "sides",
    img: "/catering/1-pound-mac-&-cheese.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-mac-cheese_ec882917-4b6d-45d0-8135-1797b3098baa",
  },
  {
    prodId: 18,
    name: "Jalapeno Corn Bread (3pc)",
    price: 5,
    description:
      "Spice up your meal with jalapeno cornbread, featuring moist cornbread infused with fiery jalapeno peppers. It's a zesty side dish that adds a kick of flavor to any barbecue feast.",
    category: "sides",
    img: "/catering/jalapeno-cheddar-corn-bread.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-of-jalapeno-chedder-corn-bread-3-peices_aa8bc335-4fbf-417b-9763-e3d569af079a",
  },
  {
    prodId: 19,
    name: "Green Beans",
    price: 5,
    description:
      "Enjoy the simplicity of green beans, cooked to perfection and seasoned with just the right amount of salt and pepper. It's a light and refreshing side dish that's perfect for rounding out any meal.",
    category: "sides",
    img: "/catering/1-pound-green-beans.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-green-beans_5c982213-12bd-4813-bc27-f7f95b6514ae",
  },
  // {
  //   prodId: 20,
  //   name: "Brownie",
  //   price: 2.0,
  //   description:
  //     "Indulge in the decadent delight of a brownie, a timeless treat that tantalizes the taste buds with its rich, fudgy texture and deep chocolate flavor. Whether enjoyed warm with a scoop of ice cream or savored on its own, each bite is a blissful indulgence that satisfies the sweetest cravings.",
  //   category: "desserts",
  //   img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/5/item-800000001525022625_1683130949.jpg?size=medium",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-brownie_d8a5ff72-ad8c-4b90-9992-5962451864e8",
  // },
  // {
  //   prodId: 21,
  //   name: "Fries",
  //   price: 5,
  //   description:
  //     "Indulge in the crispy goodness of fries, with golden-brown potatoes cooked to perfection and seasoned to perfection. It's a classic side dish that's sure to please even the pickiest eaters.",
  //   category: "sides",
  //   img: "/catering/fries.jpg",
  //   url: "https://order.toasttab.com/online/bullies-bbq/item-fries_c69be82c-4663-4bca-a3b3-3eec27b48ab5",
  // },
  {
    prodId: 22,
    name: "Brisket Chili Combo",
    price: 7,
    description:
      "Savor the bold and smoky flavors of brisket chili, boasting tender chunks of slow-smoked brisket simmered in a rich, spicy tomato-based sauce. Packed with beans, peppers, and aromatic spices, it's a hearty and satisfying dish that's sure to please any chili lover. Comes with one pience of our famous Jalapeno Cheddar Cornbread",
    category: "soups",
    img: "/catering/brisket-chili.jpeg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-brisket-chili_05746092-498f-4e0f-87df-eb5e4afbb5b8",
  },
  {
    prodId: 23,
    name: "Brunswick Stew Combo",
    price: 7,
    description:
      "Delight in the comforting flavors of Brunswick stew, a hearty Southern classic featuring a rich, savory broth filled with tender chunks of meat, hearty vegetables, and a medley of spices. It's a soul-warming dish that's perfect for warming up on a chilly day. Comes with one pience of our famous Jalapeno Cheddar Cornbread",
    category: "soups",
    img: "/catering/brunswick-stew.jpg",
    url: "https://order.toasttab.com/online/bullies-bbq/item-side-brunswick-stew_51fc829d-84ed-4462-8549-9eced3ef3d83",
  },
  {
    prodId: 24,
    name: "Turkey Sandwich",
    price: 13.0,
    description:
      "Introducing our mouthwatering Smoked Turkey Sandwich! Enjoy tender smoked turkey nestled between toasted bread. It's a flavor-packed delight that's simply irresistible!",
    category: "sandwiches",
    img: "https://images-ext-2.discordapp.net/external/5UljIDiN-mKkEbeel4KEtVOSkMmKFCvoMtu9KRpri0s/https/img.cdn4dd.com/cdn-cgi/image/fit%3Dcontain%2Cwidth%3D1200%2Cheight%3D672%2Cformat%3Dauto/https%3A/doordash-static.s3.amazonaws.com/media/photosV2/3bf86092-97f8-4121-9589-c9b314d65915-retina-large.jpg?format=webp&width=1087&height=611",
    url: "https://order.toasttab.com/online/bullies-bbq/item-j-turkey-sandwich-34_63924f2c-1989-420f-89eb-55965c23b21c",
  },
  {
    prodId: 25,
    name: "Turkey Dinner",
    price: 24.0,
    description:
      "Savor the smoky goodness of our Turkey Dinner! Tender oven-roasted turkey infused with rich BBQ flavors, served with all your favorite sides. A delicious twist on classic barbecue that's guaranteed to satisfy your cravings.",
    category: "dinners",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022164_1683832820.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-turkey-dinner_d8b33072-9bea-46fe-ae19-1617e1f68ff4",
  },
  {
    prodId: 26,
    name: "BBQ Sliders",
    price: 6.0,
    description:
      "Savor the smoky goodness of our Turkey Dinner! Tender oven-roasted turkey infused with rich BBQ flavors, served with all your favorite sides. A delicious twist on classic barbecue that's guaranteed to satisfy your cravings.",
    category: "kids",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/6/item-800000001525022466_1683134566.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-turkey-dinner_d8b33072-9bea-46fe-ae19-1617e1f68ff4",
  },
  {
    prodId: 27,
    name: "Kids Mac & Cheese",
    price: 6.0,
    description:
      "Savor the smoky goodness of our Turkey Dinner! Tender oven-roasted turkey infused with rich BBQ flavors, served with all your favorite sides. A delicious twist on classic barbecue that's guaranteed to satisfy your cravings.",
    category: "kids",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/4/item-800000001525022464_1683134927.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-turkey-dinner_d8b33072-9bea-46fe-ae19-1617e1f68ff4",
  },
  {
    prodId: 28,
    name: "Kids Rib Basket",
    price: 6.0,
    description:
      "Savor the smoky goodness of our Turkey Dinner! Tender oven-roasted turkey infused with rich BBQ flavors, served with all your favorite sides. A delicious twist on classic barbecue that's guaranteed to satisfy your cravings.",
    category: "kids",
    img: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-150841000000000000/menu/items/2/item-800000001525022462_1683134550.jpg?size=medium",
    url: "https://order.toasttab.com/online/bullies-bbq/item-turkey-dinner_d8b33072-9bea-46fe-ae19-1617e1f68ff4",
  },
];

export const reviewList: ReviewsProps[] = [
  {
    id: 1,
    name: "Paul K.",
    stars: 5,
    img: "https://s3-media0.fl.yelpcdn.com/photo/-vU5d6laigXOgNfxNePf4g/ls.jpg",
    date: "Jan 1, 2024",
    review:
      "One of our favorites in Hilton head. Amazing bbq, great sauces. Exactly what you would expect of great bbq. Ribs are perfect and the staff are very pleasant. Make this a must stop during your visit here. We can't wait to go back! Try the slaw too!!",
  },
  {
    id: 2,
    name: "Kevin S.",
    stars: 5,
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_120x120_v2.yji-de626b6fb1609a681724.png",
    date: "Nov 20, 2023",
    review:
      "Great Customer Service, great BBQ Sauce choices and the taste is amazing, the meat was well cooked and tender,I highly recommend this place and looking forward to to eat there again",
  },
  {
    id: 3,
    name: "Mike B.",
    stars: 5,
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_120x120_v2.yji-de626b6fb1609a681724.png",
    date: "Jul 20, 2023",
    review:
      "Really good BBQ, pulled pork and brisket sandwiches were tender, flavorful and juicy. Same experience with 1/2 rack of ribs. Solid sides included cole slaw, and potato salad, Mac and cheese was a miss though. They also had Mello Yello fountain soda, that's a throwback worth recognizing.",
  },
  {
    id: 4,
    stars: 5,
    img: "https://s3-media0.fl.yelpcdn.com/photo/nCPJL1H_N099vu-IizMqzQ/ls.jpg",
    name: "Coti H",
    date: "Jun 10, 2023",
    review:
      "I got takeout from Bullies on a whim, after reading some of the reviews. I arrived in time for a late lunch and they were still pretty busy but I had great, kind service.\nOrdered the Pulled Pork Sandwich, a couple of sauces, Mac 'n cheese and the jalapeño cornbread.My favorite part was the cornbread. It was some of the best I've had! The bread was so moist (more like a cake than cornbread) and full of flavor. The jalapeño flavor really came through and it was delicious, especially with a little spread of butter.My least favorite was the Mac n cheese but that was just personal preference. It was more like an Alfredo than a cheese but",
  },
  {
    id: 5,
    name: "Claire R.",
    stars: 5,
    img: "https://s3-media0.fl.yelpcdn.com/photo/UXKZIh6mqxhC22PB4kHF5w/ls.jpg",
    date: "Jun 5, 2023",
    review:
      "I really recommend Bullies. The employees are very kind. The food is some of the best barbecue food I've ever had. I might even say it's better than having a cookout in your backyard!!!. As soon as I walked in the door the smells hit me. I wanted to order everything. They have 6 very different sauces to choose from.The only complaint I have was that the brisket machine was down which prevented me and my family of five from ordering a family meal. If your searching for a place to eat with family and friends for a casual lunch/dinner I would suggest this amazing French bulldog themed restaurant.",
  },
  {
    id: 6,
    name: "Vanessa O.",
    stars: 5,
    img: "https://s3-media0.fl.yelpcdn.com/photo/gYuhZ7geVSpeu-U2nVwgHg/ls.jpg",
    date: "Nov 19, 2021",
    review:
      "We stopped in for lunch takeout. The people were friendly and allowed us time to scope the menu. They have plenty seating areas but we just wanted to head back to hotel.We chose the full slab of ribs (it is a dry rub but there's about five sauces to choose from) with a side of cornbread (3 pieces) and mac and cheese. The mac and cheese was really cheesy and tasty; wish it came with more of a portion as a side. Ribs were delicious, especially with the slow burn sauce. It was hot but after the initial kick, you'd get used to it. Nice little spot not too far from the hotel area.",
  },
];

export const homePageMenuList = [
  {
    prodId: 1,
    name: "1/2 Smoked Chicken Dinner",
    price: 16.5,
    description:
      "1/2 Chicken dinner comes with 1 1/2 smoked Chicken and your choice of 2 sides.",
    category: "dinners",
    img: "/chicken-cole-slaw-dinner.png",
  },
  {
    prodId: 2,
    name: "1/2 Smoked Chicken Dinner",
    price: 16.5,
    description:
      "1/2 Cicken dinner comes with 1 1/2 smoked Chicken and your choice of 2 sides.",
    category: "dinners",
    img: "/chicken-macaroni-dinner.png",
  },
  {
    prodId: 3,
    name: "Full Slab Dinner",
    price: 33.0,
    description:
      "Full Slab dinner comes with 1 Full Slab of dry rubbed St. Louis style Ribs and your choice of 2 sides.",
    category: "dinners",
    img: "/ribs.png",
  },
  {
    prodId: 4,
    name: "Jalapeno Cheddar Corn Bread",
    price: 4.5,
    description: "Baked fresh with Jalapenos, and Chedder Cheese",
    category: "sides",
    img: "/jalapeno-cheddar-corn-bread.jpeg",
  },
  {
    prodId: 5,
    name: "Pulled Pork Sandwich",
    price: 10,
    description: "Includes your choice of 2 sides and a drink",
    category: "sandwiches",
    img: "/pulled-pork-sandwich.jpeg",
  },
  {
    prodId: 6,
    name: "Full Slab Dinner",
    price: 33.0,
    description:
      "Full Slab dinner comes with 1 Full Slab of dry rubbed St. Louis style Ribs and your choice of 2 sides.",
    category: "dinners",
    img: "/chicken-macaroni-dinner.png",
  },
];

export const nonAlcoholicDrinks = [
  "Coke",
  "Diet Coke",
  "Coke Zero",
  "Pibb Extra ",
  "Barq's Root Beer",
  "Mellow Yellow",
  "Sprite",
  "Minute Maid Lemonade",
  "Sweet Tea",
  "Unsweet Tea",
];
