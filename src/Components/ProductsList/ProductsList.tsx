import Basket from "../Basket"
import { FixedSizeGrid as Grid } from 'react-window';
import IProduct from "../../Interfaces/Product.interface"
import { Link } from "react-router-dom"
import Header from "../Header"

const PATH = "https://testbackend.nc-one.com"

interface Props {
    products: IProduct[] | null
}

const Qwe = () => {
    return (
        <ul className="products-list_List">
            <li>
                ascscsdcsdc
            </li>
                {/* {products && products.map(({ name, id, src, price }) => {
                    return <li className="products-list_item " key={id}>
                    <Link to={`/NC-product-test/${id}`} state={{ name, id, src, price }} >
                        <img src={`${PATH}${src}`} alt={name} width="232" />
                        <p>{name}</p>
                        <p>{price}</p>
                    </Link>
                    </li>
                  
                })} */}
        </ul>
    )
} 




export const ProductsList = ({products}: Props) => {

    return (
        <>  <Header />
        <section className="products-list_section">
                <Basket />
                  <Grid
    className="Grid"
    columnCount={4}
    columnWidth={100}
    height={150}
    rowCount={1000}
    rowHeight={25}
    width={400}
                >
                    {Qwe}
                </Grid>
           
        </section></>
      
        
                
    )
}

