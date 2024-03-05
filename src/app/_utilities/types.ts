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
  | "sandwiches"
  | "dinners"
  | "sides"
  | "desserts"
  | "sauces"
  | "beer"
  | null;

export type CateringCategory =
  | "ALA Carte & by the Pound"
  | "Family Dinners to Go"
  | "Sauces & Rub"
  | null;

export interface IMenuItem {
  prodId: number;
  name: string;
  price: number;
  description: string;
  category: Category | CateringCategory;
  img: string;
  url?: string;
}

export interface CateringItems extends IMenuItem {
  quantity: number;
}

export enum EMapHrefToTitle {
  "Order Now" = "https://order.toasttab.com/online/bullies-bbq",
  "Menu" = "/menu",
  "Catering" = "/catering",
  "About" = "/about",
  "Contact" = "/contact",
  "Sauces" = "/sauces",
  "Home" = "/",
}

export type Page =
  | "Order Now"
  | "Menu"
  | "Catering"
  | "Home"
  | "About"
  | "Sauces";

export type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type Sauce =
  | "Texas Sweet"
  | "Slow Burn"
  | "Original Mild Herb"
  | "Carolina Mustard"
  | "Carolina Vinegar";

export interface ISauce {
  name: Sauce;
  description: string;
  heat: 0 | 1 | 2;
}
