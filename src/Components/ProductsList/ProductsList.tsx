import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { setGlobalState, useGlobalState } from '../../state';
import { useNavigate } from 'react-router-dom';
import { PATH_BACKEND } from '../../constants/constants';
import deleteItem from '../../General/deleteItem';



export const ProductsItem = () => {
    const products = useGlobalState("items");
    const items = useGlobalState("itemForBasket");
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLElement;
        const { nodeName } = event.target as HTMLElement;
        if (nodeName === "DIV" || nodeName === "BUTTON") {
            
            const saveBasket = products[0]!.find(el => el.id === +id);
            if (!items[0]) {
                setGlobalState("itemForBasket", [saveBasket!])
                return;
            }
            const findRepeatItem = items[0].find(element => element.id === +id);
            if (findRepeatItem) {
                deleteItem(items[0], id)
                // const deleteActiveId = items[0].filter(e => e.id !== +id);
                // setGlobalState("itemForBasket", deleteActiveId)
                return;
            }            
            setGlobalState("itemForBasket", [...items[0], saveBasket!])           
            return;
        }
        navigate(`/NC-product-test/${id}`)

    }

    return (
        <ul  className="products-list_List" >
            {products[0] && products[0].map(({ name, id, src, price }) => {
                return <li onClick={handleClick} className="products-list_item" key={id} id={String(id)} >
                        <img src={`${PATH_BACKEND}${src}`} alt={name} width="232"  />
                        <p>{name}</p>
                        <div className='products-list_button-container'>
                           <p>$ {price}</p>
                            <button id="button" className='products-list_button'>
                                <div className={items[0] && items[0].find(elem => elem.id === +id) ? "heart--active" : "heart"}></div>
                            </button>
                        </div>
                </li>

            })}
        </ul>
    )
}


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
               
    )
}

