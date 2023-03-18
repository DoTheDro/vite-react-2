import { Outlet } from "react-router-dom"

const ShopLayout = () => {
    return (
        <div className="shop-container">
            <Outlet />
        </div>

    )
}

export default ShopLayout