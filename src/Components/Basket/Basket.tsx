import { useGlobalState } from "../../state"
import { PATH_BACKEND } from "../../constants/constants";
import deleteItem from "../../General/deleteItem";



export const Basket = () => {
    const itemsInMasket = useGlobalState("itemForBasket");

    const deleteProduct = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLElement;
      deleteItem(itemsInMasket[0]!, id)
    }

    return (
            <div className="basket_container">
            <p>Favorites</p>
            <ul className="basket_list">
                {itemsInMasket[0] && itemsInMasket[0].map((data) => {
                    return <li key={data.id} className="basket_list-item" >
                        <div>
                        <img src={`${PATH_BACKEND}${data.src}`} alt={data.name} width="108" />
                        </div>
                        <div className="basket_info-container">
                            <p>{data.name}</p>
                            <div className='basket_button-container'>
                                <span>$ {data.price}</span>
                                 <button onClick={deleteProduct} id={String(data.id)} className='products-list_button'>
                                <div className={itemsInMasket[0] && itemsInMasket[0].find(elem => elem.id === +data.id) ? "heart--active" : "heart"}></div>
                            </button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
       
    )
}

export default function BasketGrid() {
  return (
          <Basket />
  );
}