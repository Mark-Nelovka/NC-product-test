import { IButtonAddBasketProps } from "../Interfaces/ButtonAddBasket";
import { useGlobalState } from "../state";
import changeCountItemInBasket from "./changeCountItemInBasket";

export default function ButtonAddBasket({ items, id }: IButtonAddBasketProps) {
  const products = useGlobalState("items");

  const changeItem = () => {
    changeCountItemInBasket(products[0]!, items!, id);
  };

  return (
    <button onClick={changeItem} className="products-list_button">
      <div
        className={
          items && items.find(elem => elem.id === +id)
            ? "heart--active"
            : "heart"
        }
      ></div>
    </button>
  );
}
