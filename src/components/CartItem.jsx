import { useEffect, useState } from "react"

export default function CartItem({ id }) {

    const [item, setItem] = useState('');


    useEffect(() => {
        const loadDetails = async () => {
            const items = await fetch(`https://fakestoreapi.com/products/${id}`)
            const parsed =  await items.json();
            console.log(parsed);
            setItem(parsed);
        }
        loadDetails();


    }, [id])


    return <div>
      <img src={item.image}/>
    </div>
}

