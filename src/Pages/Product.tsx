import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Basket from "../Components/Basket";
import Header from "../Components/Header";
import getOneProduct from "../API/getOneProduct";
import ProductOneList from "../Components/productOneList";
import IProduct from "../Interfaces/Product.interface";
import { setGlobalState } from "../state";
import PageNotFound from "./NotFound";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const [error, setError] = useState(false);

  useEffect(() => {
    getProduct(id!);
    async function getProduct(id: string) {
      try {
        const result: IProduct = await getOneProduct(id);
        setGlobalState("item", [result]);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
  }, [id]);

  return (
    <>
      <Header title="Product list Page" />
      {error && <PageNotFound />}
      {!error && (
        <main>
          <section className="product-pages_section">
            <div className="container">
              <div className="products-page_container">
                <Basket />
                <ProductOneList />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
