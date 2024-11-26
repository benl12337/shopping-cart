import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import './Gallery.css'


export async function loader({ params }) {

    const dict = {
        'mens': "men's clothing",
        'womens': "women's clothing",
        'jewelery': 'jewelery',
    }

    const searchTerm = dict[params.categoryId];
    console.log('search term is: ', params.categoryId);

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