import { useEffect, useState } from "react"
import getAllProducts from "../API/getAllProducts"
import Basket from "../Components/Basket";
import Header from "../Components/Header";
import ProductsItem from "../Components/ProductsList"
import IProduct from "../Interfaces/Product.interface"
import { setGlobalState } from "../state";

export default function Products() {
    // const [products, setProducts] = useState<IProduct[] | null>(null);
    // const [error, setError] = useState(false);


    useEffect(() => {
        getProducts();
        async function getProducts() {
            try {
                const allProducts: IProduct[] = await getAllProducts();
                setGlobalState("items", allProducts);
            } catch (error) {
                // setError(true);
            }

        }
    }, [])
    

    

    return (
        <>
            <Header />
            <main>
   <section className="product-pages_section">
                <div className="container">
                    <div className="products-page_container">
                <Basket />
                 <ProductsItem />
                </div>
           
                </div>
               
            </section>
            </main>
         
            </>
    )
}

