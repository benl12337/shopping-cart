import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import localforage from "localforage";
import QtyContext from "../components/QtyContext";
import CartIcon from "../components/CartIcon";
import './Shop.css'



const Shop = () => {

    // set the qty item
    const [qty, setQty] = useState({})


    // update the value of qty if it exists
    useEffect(() => {
        const getQty = async () => {
            const savedQty = await localforage.getItem('qty') || {};

            // check if there is an existing record of quantities
            if (savedQty) {
                setQty(savedQty);
            } 
        }
        getQty();
    }, [])

    useEffect(()=>{
        // if qty is updated, save to localforage

        console.log('quantity being updated!!');

        const save = async () => {
            await localforage.setItem('qty', qty);
        }

        save();

    }, [qty])


    return (
        <QtyContext.Provider  value={{qty, setQty}} >
            <h1>START SHOPPING</h1>
            <div className="navbar">
                <Link to="/shop/category/men's clothing" className="category-button">Men's Clothing</Link>
                <Link to="/shop/category/women's clothing" className="category-button">Women's Clothing</Link>
                <Link to="/shop/category/jewelery" className="category-button">Jewelry</Link>
                <Link to="/cart"><CartIcon qty={Object.keys(qty).length} /></Link>
            </div>
            <Outlet />
            </QtyContext.Provider>

    );
};

export default Shop;
