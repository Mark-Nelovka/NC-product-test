import { useEffect, useState } from "react"
import getAllProducts from "../API/getAllProducts"
import ProductsList from "../Components/ProductsList"
import IProduct from "../Interfaces/Product.interface"

export default function Products() {
    const [products, setProducts] = useState<IProduct[] | null>(null);
    // const [error, setError] = useState(false);


    useEffect(() => {
        getProducts();
        async function getProducts() {
            try {
                const allProducts: IProduct[] = await getAllProducts();
                // console.log(allProducts)
                setProducts(allProducts);
            } catch (error) {
                // setError(true);
            }

        }
    }, [])
    

    

    return (
        <section className="product-pages_section">
            {/* <div className="container"> */}
                 <ProductsList products={products} />
               
            {/* </div> */}
        </section>
    )
}

