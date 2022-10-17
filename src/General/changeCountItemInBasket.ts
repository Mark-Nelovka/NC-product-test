import IProduct from "../Interfaces/Product.interface";
import { setGlobalState } from "../state";
import deleteItem from "./deleteItem";

export default function changeCountItemInBasket(
  products: IProduct[],
  items: IProduct[],
  id: string
) {
  const saveBasket = products!.find(el => el.id === +id);
  console.log(id);
  if (!items || items.length === 0) {
    setGlobalState("itemForBasket", [saveBasket!]);
    return;
  }
  const findRepeatItem = items.find(element => element.id === +id);
  if (findRepeatItem) {
    deleteItem(items, id);
    return;
  }
  setGlobalState("itemForBasket", [...items, saveBasket!]);
}
