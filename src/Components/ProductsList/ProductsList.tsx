import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useGlobalState } from "../../state";
import { useNavigate } from "react-router-dom";
import { PATH_BACKEND } from "../../constants/constants";
import ButtonAddBasket from "../../General/ButtonAddBasket";

export const ProductsItem = () => {
  const products = useGlobalState("items");
  const items = useGlobalState("itemForBasket");
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    const { id } = event.currentTarget as HTMLElement;
    const { nodeName } = event.target as HTMLElement;
    if (nodeName === "DIV" || nodeName === "BUTTON") {
      return;
    }
    navigate(`/NC-product-test/${id}`);
  };

  return (
    <ul className="products-list_List">
      {products[0] &&
        products[0].map(({ name, id, src, price }) => {
          return (
            <li
              onClick={handleClick}
              className="products-list_item"
              key={id}
              id={String(id)}
            >
              <img src={`${PATH_BACKEND}${src}`} alt={name} width="232" />
              <p>{name}</p>
              <div className="products-list_button-container">
                <p>$ {price}</p>
                {products[0] && (
                  <ButtonAddBasket items={items[0]} id={String(id)} />
                )}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export const ProductsList = () => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Grid
          className="Grid"
          columnCount={4}
          columnWidth={262}
          height={height}
          rowCount={1000}
          rowHeight={20}
          width={width}
        >
          {ProductsItem}
        </Grid>
      )}
    </AutoSizer>
  );
};
