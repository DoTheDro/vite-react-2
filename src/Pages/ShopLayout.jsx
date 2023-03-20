import { Outlet } from "react-router-dom"
import { Helmet } from "react-helmet"

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