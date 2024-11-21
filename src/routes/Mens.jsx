import { useLoaderData } from "react-router-dom";

export async function loader() {
    const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
    const json = await response.json();
    return JSON.stringify(json);
}

export default function Mens() {

    const products = useLoaderData();

    return (
        <div>
            <h1>Men's Clothing</h1>
            <p>{products}</p>
        </div>
    )

}