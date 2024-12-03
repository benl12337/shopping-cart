import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import QtyContext from "../components/QtyContext";

import './Product.css'

export async function loader({ params }) {
    const item = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const parsed = item.json();

    return parsed;
}


const Product = () => {

    const item = useLoaderData();
    const [itemQty, setItemQty] = useState(0);
    const {qty, setQty} = useContext(QtyContext);


    // set quantity of item upon component mount
    useEffect(()=>{
        // get the current quantity of item
        if (qty[item.id]) {
            setItemQty(qty[item.id])
        }
    }, [item.id, qty])


    const handleClick = (action) => {

        if (action === 'increase') {
            setItemQty(itemQty + 1);
        } else {
            if (itemQty == 0) {
                return;
            }
            setItemQty(itemQty - 1);
        }
    }

    const handleChange = (e) => {
        // the data structure should be {id: quantity}
        setItemQty(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // update the quantity
        const updated = {...qty};
   
        updated[item.id] = itemQty;

        if (itemQty == 0) {
            delete updated[item.id]
        }
    
       setQty(updated);

    }


    return (
        <div className="product-page">
            <div className="product-information">
                <div className="product-left">
                    <img className="product-img" src={item.image} />
                </div>
                <div className="product-right">
                    <h3>{item.title}</h3>
                    <h5>{item.description}</h5>
                    <form onSubmit={handleSubmit} action="post">
                        <div className="button-group">
                            <button type="button" className="quantity-btn" onClick={() => handleClick('decrease')}>−</button><input  onChange={handleChange} className="" type="number" value={itemQty} min="0" /><button type="button" className="quantity-btn" onClick={() => handleClick('increase')}>+</button>
                        </div>
                        <button type="submit">{itemQty ? "Add to Cart" : "Update"}</button></form>
                </div>
            </div>
        </div>
    )

}

export default Product