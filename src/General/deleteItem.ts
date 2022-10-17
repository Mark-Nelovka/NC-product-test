import { setGlobalState } from '../state';
import IProduct from '../Interfaces/Product.interface';


export default function deleteItem(items: IProduct[], id: string) {
     const deleteActiveId = items.filter(e => e.id !== +id);
     setGlobalState("itemForBasket", deleteActiveId)
}