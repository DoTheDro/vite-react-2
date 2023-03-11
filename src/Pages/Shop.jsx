import { Link } from "react-router-dom"
import './shop.css'

const Shop = (props) => {
    const product = props.currentProducts.map((currentProduct) => {
        return (
            <div className="product-list" key={currentProduct.id}>
                <div className="item">
                    <img src={currentProduct.image} alt={currentProduct.title} className="product-image" />
                    <h2 className="product-name">{currentProduct.title}</h2>
                    <p className="product-price">$ {currentProduct.price}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="products">{product}</div>
    )
}

export default Shop