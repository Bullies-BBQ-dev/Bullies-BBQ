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

export type CateringCategory =
  | "ALA Carte & by the Pound"
  | "Family Dinners to Go"
  | "Sauces & Rub"
  | null;

export interface IMenuItem {
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
  "Shop" = "/shop",
  "Home" = "/",
}

export type Page = "Order Now" | "Menu" | "Catering" | "Home" | "About";

export type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};
