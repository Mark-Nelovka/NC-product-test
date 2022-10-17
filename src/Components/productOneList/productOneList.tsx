import { useParams } from "react-router-dom";
import { useGlobalState } from "../../state";
import { PATH_BACKEND } from "../../constants/constants";
import ChangeCountItemInBasket from "../../General/changeCountItemInBasket";

export const ProductOneList = () => {
  const products = useGlobalState("items");
  const item = useGlobalState("item");
  const items = useGlobalState("itemForBasket");
  const { id } = useParams<{ id: string }>();

  const changeCount = (event: React.MouseEvent) => {
    const changeId = event.currentTarget.id;
    if (changeId === id) {
      ChangeCountItemInBasket(products[0]!, items[0]!, id!);
      return;
    }
    ChangeCountItemInBasket(products[0]!, items[0]!, changeId!);
  };

  return (
    <>
      {item[0] &&
        item[0].map(data => {
          return (
            <div className="product_container" key={data.id}>
              <div className="product_image-container">
                <img
                  src={`${PATH_BACKEND}${data.src}`}
                  alt={data.name}
                  width="448"
                />
              </div>
              <div className="product_info-container">
                <p>{data.name}</p>
                <div className="product_list-button-container">
                  <span>$ {data.price}</span>
                  <button
                    onClick={changeCount}
                    id={String(data.id)}
                    className="product-list_button"
                  >
                    <div
                      className={
                        items[0] && items[0].find(elem => elem.id === +data.id)
                          ? "product_heart--active"
                          : "product_heart"
                      }
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
