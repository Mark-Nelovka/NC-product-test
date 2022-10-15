import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
const Products = lazy(() =>
  import("./Pages/Products" /*webpackChunkName: "Products" */)
);
const ProductPage = lazy(() =>
  import("./Pages/Product" /*webpackChunkName: "ProductPage" */)
);

function App() {
  return (
    <>
        <Suspense fallback="loading">
          <Routes>
            <Route path="/NC-product-test" element={<Products />} />
            <Route path="/NC-product-test/:id" element={<ProductPage />} />
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
