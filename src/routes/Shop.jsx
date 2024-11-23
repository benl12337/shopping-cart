import { Link, Outlet } from "react-router-dom"

const Shop = () => {
    return (
        <div>
                    <h1>Welcome to our site! Start shopping by clicking one of the below:</h1>
                    <Link to='shop/mens'>Men's Clothing</Link>
                    <Link to='shop/womens'>Women's Clothing</Link>
                    <Link to='shop/jewelery'>Jewelry</Link>
                    <Outlet/>
        </div>

    )
}

export default Shop;