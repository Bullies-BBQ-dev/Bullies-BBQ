export interface BannerWithTitleProps {
  backgroundURL: string;
  title: string;
  children?: never;
}

export interface BannerWithChildrenProps {
  backgroundURL: string;
  title?: never;
  children: React.ReactNode;
}

export type BannerProps = BannerWithTitleProps | BannerWithChildrenProps;

export type Category =
  | "Sandwiches"
  | "Dinners"
  | "Sides"
  | "Desserts"
  | "Non-Alcoholic"
  | "Beer"
  | null;

export interface IMenuItem {
  name: string;
  price: number;
  description: string;
  category: Category;
  img: string;
}

export enum EMapHrefToTitle {
  "Order Now" = "https://order.toasttab.com/online/bullies-bbq",
  "Menu" = "/menu",
  "Catering" = "/catering",
  "About" = "/about",
  "Contact" = "/contact",
  "Shop" = "/shop",
}

export type Page =
  | "Order Now"
  | "Menu"
  | "Catering"
  | "Home"
  | "About"
  | "Contact"
  | "Shop";
