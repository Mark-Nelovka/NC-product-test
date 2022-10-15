import IProduct from "./Product.interface";

export default interface IState {
    id: boolean | number,
    itemForBasket: IProduct[] | null ;
    items: IProduct[] | null;
}