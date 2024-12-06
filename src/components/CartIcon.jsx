import localforage from "localforage";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";


const CartIcon = ({qty}) => {
    return (
        <div className="cart-icon">
            <p>Cart</p>
            <div className="cart-qty">{qty}</div>
        </div>
    )
}

CartIcon.propTypes = {
    qty: PropTypes.number
}

export default CartIcon;