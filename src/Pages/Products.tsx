import { useEffect, useState } from "react";
import getAllProducts from "../API/getAllProducts";
import Basket from "../Components/Basket";
import Header from "../Components/Header";
import ProductsList from "../Components/ProductsList";
import IProduct from "../Interfaces/Product.interface";
import { setGlobalState } from "../state";
import PageNotFound from "./NotFound";

export default function Products() {
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts();
    async function getProducts() {
      try {
        const allProducts: IProduct[] = await getAllProducts();
        setGlobalState("items", allProducts);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
  }, []);

  return (
    <>
      <Header title="Products list Page" />
      {error && <PageNotFound />}
      {!error && (
        <main>
          <section className="products-pages_section">
            <div className="container">
              <div className="products-page_container">
                <Basket />
                <ProductsList />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
