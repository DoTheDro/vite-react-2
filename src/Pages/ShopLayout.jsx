import { Outlet } from "react-router-dom"

const ShopLayout = () => {
    return (
        <div className="shop-container">
            <title>Shop</title>

            <Outlet />
        </div>

    )
}

export default ShopLayout