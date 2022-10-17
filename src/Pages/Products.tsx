import { useEffect } from "react"
import getAllProducts from "../API/getAllProducts"
import BasketGrid from "../Components/Basket/Basket";
import Header from "../Components/Header";
import ProductsItem from "../Components/ProductsList"
import IProduct from "../Interfaces/Product.interface"
import { setGlobalState } from "../state";

export default function Products() {

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
            <Header title="Products list Page" />
            <main>
   <section className="product-pages_section">
                <div className="container">
                    <div className="products-page_container">
                <BasketGrid />
                 <ProductsItem />
                </div>
           
                </div>
               
            </section>
            </main>
         
            </>
    )
}

