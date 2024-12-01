import PropTypes from "prop-types";



const CartIcon = ({quantity}) => {

    return (
        <div className="cart-icon">
            <p>Cart</p>
            <div className="quantity">{quantity}</div>
        </div>
    )
}

CartIcon.propTypes = {
    quantity: PropTypes.number
}

export default CartIcon;