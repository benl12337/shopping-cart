import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import './Product.css'

export async function loader({ params }) {
    const item = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const parsed = item.json();

    return parsed;
}



const Product = () => {

    const item = useLoaderData();
    const [qty, setQty] = useState(1);

    const handleClick = (action) => {
        
        if (action === 'increase') {
            setQty(qty + 1);
        } else {
            if (qty == 1) {
                return;
            }
            setQty(qty - 1);
        }
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
                    <form action="post">
                    <button type="button" onClick={()=>handleClick('decrease')}>−</button><input className="" type="number" value={qty} placeholder="1" min="1"/><button type="button" onClick={()=>handleClick('increase')}>+</button>
                    <button type="submit">Add To Cart</button>   </form> 
                </div>
            </div>
        </div>
    )

}

export default Product