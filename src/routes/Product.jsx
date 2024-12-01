import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import localforage from "localforage";
import './Product.css'

export async function loader({ params }) {
    const item = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const parsed = item.json();

    return parsed;
}


const Product = () => {

    const item = useLoaderData();
    const [qty, setQty] = useState(0);

    useEffect(()=>{
        const getQty = async () =>{
            const savedQty = await localforage.getItem('qty') || {};

            // check if there is an existing quantity
            if (savedQty[item.id]) {
                setQty(savedQty[item.id]);
            } 
        }

        getQty();

    }, [item.id])

    const handleClick = (action) => {

        if (action === 'increase') {
            setQty(qty + 1);
        } else {
            if (qty == 0) {
                return;
            }
            setQty(qty - 1);
        }
    }

    const handleChange = (e) => {
        // the data structure should be {id: quantity}
        setQty(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // update the quantity
        const updated = await localforage.getItem('qty') || {};
   
        updated[item.id] = qty;

        if (qty == 0) {
            delete updated[item.id]
        }
    
       localforage.setItem('qty', updated).then((value)=>{
        console.log(value);
       })

    }

    // get the quantity of the item

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
                            <button type="button" className="quantity-btn" onClick={() => handleClick('decrease')}>−</button><input  onChange={handleChange} className="" type="number" value={qty} min="0" /><button type="button" className="quantity-btn" onClick={() => handleClick('increase')}>+</button>
                        </div>
                        <button type="submit">{qty ? "Add to Cart" : "Update"}</button></form>
                </div>
            </div>
        </div>
    )

}

export default Product