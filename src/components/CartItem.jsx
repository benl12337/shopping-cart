import { useEffect, useState, useContext } from "react"
import QtyContext from "./QtyContext";

export default function CartItem({ id }) {

    const [item, setItem] = useState('');
    const [itemQty, setItemQty] = useState(0)
    const {qty, setQty} = useContext(QtyContext); ;


    useEffect(() => {
        const loadDetails = async () => {
            const items = await fetch(`https://fakestoreapi.com/products/${id}`)
            const parsed = await items.json();
            setItem(parsed);
        }
        loadDetails();
    }, [id])

    useEffect(() => {

        // get the quantity of current item
        const id = qty.find((prod) => prod.id === item.id);
        if (id) {
            setItemQty(id.count)
        }
    }, [item, qty])


    

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

    return (
        <div className="checkout-item">
            <img src={item.image} />
            <div className="button-group">
                <button type="button" className="quantity-btn" onClick={() => handleClick('decrease')}>−</button><input onChange={handleChange} className="" type="number" value={itemQty} min="0" /><button type="button" className="quantity-btn" onClick={() => handleClick('increase')}>+</button>
            </div>
            <h2>{item.price * itemQty}</h2>
        </div>
    )
}

