import { useLoaderData, useParams } from "react-router-dom"
import './viewproduct.css'

const ViewProduct = () => {
    const { id } = useParams()
    const singleProduct = useLoaderData()

    return (
        <div className="about-product">
            <title>{singleProduct.title}</title>

            <div className="product-image">
                <img src={singleProduct.image} alt={singleProduct.title} />
            </div>

            <div className="product-details">
                <h2 className="product-title">
                    {singleProduct.title}
                </h2>
                <h3 className="product-price">
                    $ {singleProduct.price}
                </h3>
                <p className="product-rating">
                    <span>Rating:</span> {singleProduct.rating.rate + " / 5"}
                </p>
                <div className="product-description">
                    Description
                    <p className="description">
                        {singleProduct.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct

export const viewProductLoader = async ({ params }) => {

    const { id } = params

    const res = await fetch('https://fakestoreapi.com/products/' + id)

    return res.json()
}