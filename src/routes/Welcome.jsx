import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div>
                    <h1>Welcome to our site! Start shopping by clicking one of the below:</h1>
                    <Link to='shop/mens/'>Men's Clothing</Link>
                    <Link to='shop/womens/'>Men's Clothing</Link>
                    <Link to='shop/jewelry/'>Men's Clothing</Link>
        </div>

    )
}

export default Welcome;