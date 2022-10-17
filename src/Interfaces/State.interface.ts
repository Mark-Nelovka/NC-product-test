import IProduct from "./Product.interface";

export default interface IState {
  itemForBasket: IProduct[] | null;
  items: IProduct[] | null;
  item: IProduct[] | null;
}
