import { useLoaderData } from "react-router-dom";

export async function loader() {
    const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
    const json = await response.json();
    return JSON.stringify(json);
}

export default function Jewelry() {

    const products = useLoaderData();

    return (
        <div>
            <h1>Jewelry</h1>
            <p>{products}</p>
        </div>
    )

}