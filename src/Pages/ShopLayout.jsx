import { Helmet } from "react-helmet"
import { Outlet } from "react-router-dom"

const ShopLayout = () => {
    return (
        <div className="shop-container">
            <Helmet>
                <title>Shop</title>
            </Helmet>

            <Outlet />
        </div>

    )
}

export default ShopLayout