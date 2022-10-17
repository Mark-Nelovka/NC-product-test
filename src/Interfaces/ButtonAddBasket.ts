import IProduct from "./Product.interface";

export interface IButtonAddBasketProps {
  items: IProduct[] | null;
  id: string;
}
