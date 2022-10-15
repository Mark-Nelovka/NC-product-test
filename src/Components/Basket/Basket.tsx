import { useGlobalState } from "../../state"

export const Basket = () => {
    const itemsInMasket = useGlobalState("itemForBasket");
    return (
        <div className="basket_container">
            <p>Favorites</p>
            <ul className="basket_list">
                {itemsInMasket[0] && itemsInMasket[0].map((data) => {
                    return <li key={data.id}>{data.name}</li>
                })}
            </ul>
        </div>
    )
}