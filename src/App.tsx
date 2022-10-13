import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
const Products = lazy(() =>
  import("./Page/Products" /*webpackChunkName: "Products" */)
);
const ProductPage = lazy(() =>
  import("./Page/Product" /*webpackChunkName: "ProductPage" */)
);

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback="loading">
          <Routes>
            <Route path="/NC-product-test" element={<Products />} />
            <Route path="/NC-product-test/:id" element={<ProductPage />} />
          </Routes>
        </Suspense>
       
      </main>
    </>
  );
}

export default App;
