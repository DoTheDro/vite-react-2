import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import './shop.css'

const Shop = () => {
    //react router useLoaderData
    const productItems = useLoaderData()

    //storing selected category
    const [ selectedCategory, setSelectedCategory ] = useState([])

    //checking if selected a category
    const isSelected = selectedCategory.length === 0

    //sort choice
    const [ sortChoice, setSortChoice ] = useState('')

    if (sortChoice.length !== 0) {
        if (sortChoice === "title") {
            productItems.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return 1
                } else {
                    return 0
                }
            })
        } else if (sortChoice === "price") {
            productItems.sort((a, b) => {
                if (a.price < b.price) {
                    return -1
                } else if (a.price > b.price) {
                    return 1
                } else {
                    return 0
                }
            })
        } else if (sortChoice === "rating") {
            productItems.sort((a, b) => {
                if (a.rating.rate < b.rating.rate) {
                    return -1
                } else if (a.rating.rate > b.rating.rate) {
                    return 1
                } else {
                    return 0
                }
            })
        }
    }

    //for listing category
    const categoryChoices = []

    //changing state for category
    const handleRadioBtn = (e) => {
        return setSelectedCategory(e.target.value)
    }

    //changing state for sort
    const handleSelect = (e) => {
        return setSortChoice(e.target.value);
    }
    
    //getting categories
    const categorized = productItems.reduce((categorizedItem, item) => {
        const category = item.category
        if (categorizedItem[category] == null) categorizedItem[category] = []
        categorizedItem[category].push(item)
        return categorizedItem
    }, {})

    for (let key in categorized) {
        if (categorized.hasOwnProperty(key)) {
            categoryChoices.push(key)
        }
    }

    const categoryChoice = categoryChoices.map((choice) => {
        return (
            <div className="side-category" key={choice}>
                <input 
                name="productCategory"
                onChange={handleRadioBtn}
                type="radio"
                value={choice}
                /> {choice} 
            </div>
        )
    })

    //filtering product if selected a category
    const filtering = productItems.filter((filtered) => {
        if (filtered.category === selectedCategory) {
            return filtered
        }
    })

    const filteredProduct = filtering.map((currentProduct) => {
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
    
    //all products
    const notFilteredProduct = productItems.map((currentProduct) => {
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

    //for opening filter panel
    const openFilterPanel = () => {
        document.getElementById('filter-panel-mobile').classList.add('show')
    }


    //for closing filter panel
    const closeFilterPanel = () => {
        document.getElementById('filter-panel-mobile').classList.remove('show')
    }

    return (
        <div className="shop-content">
            <div id="filter-panel-mobile">
                <button className="close-filter-panel" onClick={closeFilterPanel}>X</button>
                <h2>Category</h2>
                <div className="choose-category">
                    {categoryChoice}
                </div>
            </div>
            <div id="filter-panel-desktop">
                <h2>Category</h2>
                <div className="choose-category">
                    {categoryChoice}
                </div>
            </div>
            <div className="category-column">
                <button className="btn-filter" onClick={openFilterPanel}>Filter</button>
                <select value={sortChoice} onChange={handleSelect}>
                    <option value="" disabled hidden>Sort By</option>
                    <option value="title">By Name</option>
                    <option value="rating">By Rating</option>
                    <option value="price">By Price</option>
                </select>
            </div>
            <div className="products">
                {
                isSelected 
                    ? <div>{notFilteredProduct}</div>
                    : <div>{filteredProduct}</div>
                }
            </div>
        </div>
    )
}

export default Shop

export const shopLoader = async () => {
    const res = await fetch('https://fakestoreapi.com/products')

    return res.json()
}
