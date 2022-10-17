import { useEffect } from "react"
import { useParams } from "react-router-dom"
import BasketGrid from "../Components/Basket/Basket";
import Header from "../Components/Header";
import getOneProduct from "../API/getOneProduct";
import ProductOneList from "../Components/productOneList";
import IProduct from "../Interfaces/Product.interface";
import { setGlobalState } from "../state";

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getProduct(id!);
      async function getProduct(id: string) {
          const result: IProduct = await getOneProduct(id);
          setGlobalState("item", [result]);
      }
        
    }, [id])
    

    return (
        <>
        <Header title="Product list Page" />
            <main>
   <section className="product-pages_section">
                <div className="container">
                    <div className="products-page_container">
                <BasketGrid />
                  <ProductOneList />
                </div>
                </div>
            </section>
            </main>
           
            </>
    )
}