import { Link, useLoaderData } from "react-router-dom"
import './shop.css'

const Shop = () => {
    const productItems = useLoaderData()

    console.log(productItems)
    const product = productItems.map((currentProduct) => {
        return (
            <Link to={currentProduct.id.toString()} className="product-list" key={currentProduct.id}>
            <div className="item">
                    <img src={currentProduct.image} alt={currentProduct.title} className="product-image" />
                    <h2 className="product-name">{currentProduct.title}</h2>
                    <p className="product-price">$ {currentProduct.price}</p>
                </div>
            </Link>
        )
    })

    return (
        <div className="products">{product}</div>
    )
}

export default Shop

export const shopLoader = async () => {
    const res = await fetch('https://fakestoreapi.com/products')

    return res.json()
}
