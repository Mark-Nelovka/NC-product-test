// import axios from "axios"
// import { useEffect, useState } from "react"
// import getAllProducts from "../API/getAllProducts"
import Basket from "../Components/Basket"
import ProductsList from "../Components/ProductsList"

export default function Products() {
    // const [products, setProducts] = useState(null);
    // const [error, setError] = useState(false);


    // useEffect(() => {
    //     getProducts();
    //     async function getProducts() {
    //         try {
    //             const allProducts = await getAllProducts();
    //             console.log(allProducts)
    //             // setProducts(allProducts);
    //         } catch (error) {
    //             setError(true);
    //         }

    //     }
    // }, [])
    

    return (
        <section className="product-pages_section">
            <div className="container">
                <div className="products_container">
                    <Basket />
                    <ProductsList />
                </div>
            </div>
        </section>
    )
}

