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
  | "drinks"
  | "beer";

export type CateringCategory =
  | "ALA Carte & by Pound"
  | "Family Dinners"
  | "Sauces & Rubs"
  | null;

export interface IFoodItem {
  name: string;
  price: number;
  description: string;
  img: string;
  url?: string;
}

export interface IMenuItem extends IFoodItem {
  prodId: number;
  category: Category;
}

export interface CateringItems extends IFoodItem {
  category: Category | CateringCategory;
  quantity: number;
}
export interface ICateringItems extends IFoodItem {
  category: Category | CateringCategory;
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
  | "Original Mild Herb"
  | "Carolina Mustard"
  | "Carolina Vinegar"
  | "Slow Burn";

export interface ISauce {
  name: Sauce;
  description: string;
  heat: 0 | 1 | 2;
}

export type ReviewsProps = {
  id: number;
  name: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  img: string;
  date: string;
  review: string;
};

export type HomeMenuProps = {
  prodId: number;
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
  url?: string;
};
