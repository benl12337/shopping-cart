import PropTypes from "prop-types"
import './ItemCard.css'


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
                <img className="product-img" src={item.image} />
            </div>

            <div className="product-title">
                <h4>{item.title}</h4>
            </div>

            

        </div>
    )

}