import { Link, useLoaderData } from "react-router-dom"
import './shop.css'

const Shop = () => {
    const productItems = useLoaderData()
    
    const categorized = productItems.reduce((categorizedItem, item) => {
        const category = item.category
        if (categorizedItem[category] == null) categorizedItem[category] = []
        categorizedItem[category].push(item)
        return categorizedItem
    }, {})
    
    for (const category in categorized) {
        console.log(category)
    }

    const product = productItems.map((currentProduct) => {
        return (
            <Link to={currentProduct.id.toString()} className="product-list" key={currentProduct.id}>
            <div className="item">
                    <img src={currentProduct.image} alt={currentProduct.title} className="product-image" />
                    <h2 className="product-name">{currentProduct.title}</h2>
                    <p className="product-rating"><span>Rating: </span>{currentProduct.rating.rate} / 5</p>
                    <p className="product-price">$ {currentProduct.price}</p>
                </div>
            </Link>
        )
    })

    const openFilterPanel = () => {
        document.getElementById('filter-panel').classList.add('show')
    }

    const closeFilterPanel = () => {
        document.getElementById('filter-panel').classList.remove('show')
    }

    return (
        <div className="shop-content">
            <div id="filter-panel">
                <button className="close-filter-panel" onClick={closeFilterPanel}>X</button>
                <h2>Category</h2>
            </div>
            <div className="category-column">
                <button className="btn-filter" onClick={openFilterPanel}>Filter</button>
                <button className="btn-sort">Sort</button>
            </div>
            <div className="products">{product}</div>
        </div>
    )
}

export default Shop

export const shopLoader = async () => {
    const res = await fetch('https://fakestoreapi.com/products')

    return res.json()
}
