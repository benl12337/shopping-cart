import { Link, Outlet } from "react-router-dom";
import localforage from "localforage";
import { useState, useEffect } from "react";
import CartIcon from "../components/CartIcon";

import './Shop.css'

const Shop = () => {
    return (
        <div>
            <h1>START SHOPPING</h1>
            <div className="navbar">
                <Link to="/shop/category/men's clothing" className="category-button">Men's Clothing</Link>
                <Link to="/shop/category/women's clothing" className="category-button">Women's Clothing</Link>
                <Link to="/shop/category/jewelery" className="category-button">Jewelry</Link>
                <Link to="/cart"><CartIcon /></Link>
            </div>

            <Outlet />

        </div>
    );
};

export default Shop;
