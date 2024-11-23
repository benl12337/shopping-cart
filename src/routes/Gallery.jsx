import { useLoaderData } from "react-router-dom";


export async function loader({params}) {

    const dict = {
        'mens': "men's clothing",
        'womens': "women's clothing",
        'jewelery': 'jewelery',
    }

    const searchTerm = dict[params.categoryId];
    console.log('search term is: ',searchTerm);

    const items = await fetch(`https://fakestoreapi.com/products/category/${searchTerm}`)
    const parsed = items.json();

    return parsed;
}


export default function Gallery() {
     const items = useLoaderData();
    return (
        <div className="product-grid">
            <ul>
               {
                items.map((item)=>{
                    return <li key={item.title}>{item.title}</li>
                })
               }
            </ul>
        </div>
    )
}