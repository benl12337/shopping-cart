import PropTypes from "prop-types"
import './ItemCard.css'
import { Link } from "react-router-dom"


ItemCard.propTypes = {
    item: PropTypes.object,
}

export default function ItemCard({ item }) {

    return (
        <div
            key={item.title}
            className="product-card"
        >
            <div className="img-container">
                <img className="gallery-img" src={item.image} />
            </div>

            <div className="product-title">
                <h4>{item.title}</h4>
            </div>

            <Link to={`/shop/product/${item.id}`}><button type="button" className="add-to-cart">Add to cart</button></Link>
        </div>
    )

}