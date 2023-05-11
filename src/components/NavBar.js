import React from "react";
import { Link } from "react-router-dom";


function NavBar(){


    return (
        <>
        <div className="nav-bar">
        <div className="nav-logo">
            <button className="nav-icon">
            {/* <Link href={`#`}> */}
                VEGEFOODS
            {/* </Link> */}
                </button>
        </div>
        <div className="nav-menu">

        <ul className="my-nav">
        <li>
        <Link to="/">HOME</Link>
        </li>
        <li>
        <Link to="/shop">SHOP</Link>
        </li>
        <li>
        <Link to="/about">ABOUT</Link>
        </li>
        <li>
        <Link to="/blog">BLOG</Link>
        </li>
        <li>
        <Link to="/contact">CONTACT</Link>
        </li>
        <li>
        <Link to="/cart">CART</Link>
        </li>

    </ul>
        </div>
        </div>
        </>
    )
}

export default NavBar;