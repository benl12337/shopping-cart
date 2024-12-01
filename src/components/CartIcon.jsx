import localforage from "localforage";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";


const CartIcon = () => {

    const [noItems, setNoItems] = useState(0)

    useEffect(()=>{
        const getNo = async () => {
            const qty = await localforage.getItem('qty');
            const length = Object.keys(qty).length;
            setNoItems(length);
        }

        getNo();
    }, [])

    return (
        <div className="cart-icon">
            <p>Cart</p>
            <div className="cart-qty">{noItems}</div>
        </div>
    )
}

CartIcon.propTypes = {
    quantity: PropTypes.number
}

export default CartIcon;