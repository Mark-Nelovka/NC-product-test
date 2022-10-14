import Basket from "../Basket"
import IProduct from "../../Interfaces/Product.interface"
import { Link } from "react-router-dom"

const PATH = "https://testbackend.nc-one.com"

interface Props {
    products: IProduct[] | null
}

export const ProductsList = ({products}: Props) => {
// console.log(products);

    return (
        <section className="products-list_section">
            <Basket />
            <ul className="products-list_List">
                {products && products.map(({ name, id, src, price }) => {
                    // console.log(src);
                    return <li className="products-list_item " key={id}>
                    <Link to={`/NC-product-test/${id}`} state={{ name, id, src, price }} >
                        <img src={`${PATH}${src}`} alt={name} width="232" />
                        <p>{name}</p>
                        <p>{price}</p>
                    </Link>
                    </li>
                  
                })}
        </ul>
        </section>
        
                
    )
}