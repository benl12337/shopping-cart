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
    const { qty, setQty } = useContext(QtyContext);


    // set quantity of item upon component mount
    useEffect(() => {

        // get the quantity of current item
        const id = qty.find((prod) => prod.id === item.id);
        if (id) {
            setItemQty(id.count)
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
        setItemQty(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // make a deep copy of qty
        const updated = qty.map((item) => ({ ...item }));
        const existing = qty.find((i) => i.id === item.id)
        console.log('maroon', existing);

        // if does not exists in array, push a new item
        if (!existing) {
            // add the new object
            updated.push(
                {
                    id: item.id,
                    count: itemQty,
                }
            )
            console.log(item.id, itemQty);
            setQty(updated);
            return;
        }


        // if it exists in updated
        updated.forEach((i) => {
            if (i.id === item.id) {
                i.count = itemQty;
            }
        });


        if (itemQty == 0) {
            const temp = [...updated.filter((i) => i.id !== item.id)];
            setQty(temp);
            return;
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
                            <button type="button" className="quantity-btn" onClick={() => handleClick('decrease')}>−</button><input onChange={handleChange} className="" type="number" value={itemQty} min="0" /><button type="button" className="quantity-btn" onClick={() => handleClick('increase')}>+</button>
                        </div>
                        <button type="submit">{itemQty ? "Add to Cart" : "Update"}</button></form>
                </div>
            </div>
        </div>
    )

}

export default Product