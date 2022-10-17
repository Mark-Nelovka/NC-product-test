import { useGlobalState, setGlobalState } from "../../state";
import { PATH_BACKEND } from "../../constants/constants";
import ButtonAddBasket from "../../General/ButtonAddBasket";

export const Basket = () => {
  const itemsInMasket = useGlobalState("itemForBasket");
  const products = useGlobalState("items");

  const visibleInBasket = (event: React.MouseEvent) => {
    const { nodeName } = event.target as HTMLElement;
    const { id } = event.currentTarget as HTMLElement;
    if (nodeName === "DIV" || nodeName === "BUTTON") {
      return;
    }

    const changeProduct = products[0]!.find(el => el.id === +id);
    setGlobalState("item", [changeProduct!]);
  };

  return (
    <div className="basket_container">
      <p>Favorites</p>
      <ul className="basket_list">
        {itemsInMasket[0] &&
          itemsInMasket[0].map(data => {
            return (
              <li
                key={data.id}
                className="basket_list-item"
                onClick={visibleInBasket}
                id={String(data.id)}
              >
                <div>
                  <img
                    src={`${PATH_BACKEND}${data.src}`}
                    alt={data.name}
                    width="108"
                  />
                </div>
                <div className="basket_info-container">
                  <p>{data.name}</p>
                  <div className="basket_button-container">
                    <span>$ {data.price}</span>
                    {itemsInMasket[0] && (
                      <ButtonAddBasket
                        items={itemsInMasket[0]}
                        id={String(data.id)}
                      />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
