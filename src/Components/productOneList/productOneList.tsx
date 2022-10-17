import { useParams } from "react-router-dom"
import deleteItem from "../../General/deleteItem"
import { setGlobalState, useGlobalState } from "../../state"
import { PATH_BACKEND } from "../../constants/constants"

export const ProductOneList = () => {
        const products = useGlobalState("items");
    const item = useGlobalState("item")
    const items = useGlobalState("itemForBasket");
   const {id} = useParams<{id: string }>()

    const deleteProduct = () => {
        deleteItem(items[0]!, id!)
    }

    const visibleInBasket = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLElement;
        const changeProduct = products[0]!.find(el => el.id === +id)
        console.log(changeProduct)
        setGlobalState("item", [changeProduct!])
    }

    return (
        <>
        
            {item[0] && item[0].map((data) => {
                return <div className="product_container" key={data.id} onClick={visibleInBasket}>
                    <div className="product_image-container" >
                <img src={`${PATH_BACKEND}${data.src}`} alt={data.name} width="448" />
                    </div>
                    <div className="product_info-container">
                     <p>{data.name}</p>
                <div className='product_list-button-container'>
                                <span>$ {data.price}</span>
                                 <button onClick={deleteProduct} id={String(data.id)} className='product-list_button'>
                                <div className={items[0] && items[0].find(elem => elem.id === +data.id) ? "product_heart--active" : "product_heart"}></div>
                            </button>
                    </div>
                    </div>
           
                   </div>
            })
            }
            
            </>
    )
}