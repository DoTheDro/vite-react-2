import { useLoaderData, useParams } from "react-router-dom"

const ViewProduct = () => {
    const { id } = useParams()
    const singleProduct = useLoaderData()

    console.log(singleProduct)

    return (
        <div className="about-product">
            <h2>{ id }</h2>
        </div>
    )
}

export default ViewProduct

export const viewProductLoader = async ({ params }) => {

    const { id } = params

    const res = await fetch('https://fakestoreapi.com/products/' + id)

    return res.json()
}