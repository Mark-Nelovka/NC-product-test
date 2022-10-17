import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Products = lazy(
  () => import("./Pages/Products" /*webpackChunkName: "Products" */)
);
const ProductPage = lazy(
  () => import("./Pages/Product" /*webpackChunkName: "ProductPage" */)
);
const PageNotFound = lazy(
  () => import("./Pages/NotFound" /*webpackChunkName: "PageNotFound" */)
);

function App() {
  return (
    <>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/NC-product-test" element={<Products />} />
          <Route path="/NC-product-test/:id" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
