import Backet from "../Components/Backet"
import ProductsList from "../Components/ProductsList"

export default function Products() {
    return (
        <section>
            <div className="container">
                <div className="products_container">
                    <Backet />
                    <ProductsList />
                </div>
            </div>
        </section>
    )
}

