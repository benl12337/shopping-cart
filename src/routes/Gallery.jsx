import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import localforage from "localforage";
import './Gallery.css'



export async function loader({ params }) {

    
    const searchTerm = params.categoryId

    const items = await fetch(`https://fakestoreapi.com/products/category/${searchTerm}`)
    const parsed = items.json();

    return parsed;
}


export default function Gallery() {
    const items = useLoaderData();
    return (
        <div className="product-grid">
            {
                items.map((item) => {
                    return <ItemCard item={item} key={item.title}/>
                })
            }

        </div>
    )
}