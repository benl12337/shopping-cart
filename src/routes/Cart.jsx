import { useContext } from "react";
import QtyContext from "../components/QtyContext";
import CartItem from "../components/CartItem";

// show list of items from the context
const Cart = () => { 

    const {qty, setQty} = useContext(QtyContext); 
    
    return (
        <>
        <ul className="checkout-list">
        {
           qty.map((product)=>{
            return <li key={product.id}>
                < CartItem id={product.id} />
            </li>
           })
        }
        </ul>
        <button type="button" >Checkout</button>
        </>
    )
    
}

export default Cart;