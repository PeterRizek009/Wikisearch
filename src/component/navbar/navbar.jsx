import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [clicked, setclicked] = useState(false);

    const handleClick = () => {
        setclicked(!clicked);
    };


    return (
        <>
            <div className={clicked ? "side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" : "side-navbar d-flex justify-content-between flex-wrap flex-column"} id="sidebar">
                <ul className="nav flex-column mt-5 text-white w-100">
                    <li className="nav-link mb-4">
                        <i className="fas fa-home" />
                        <Link to="/" className="mx-2">Home</Link>
                    </li>
                    <li className="nav-link  mb-4">
                        <i className="fas fa-bookmark"></i>
                        <Link to="/SavedSearches" className="mx-2">Saved searches</Link>
                    </li>
                    <li className="nav-link  mb-4">
                        <i className="fa-solid fa-address-card"></i>
                        <Link to="/About" className="mx-2">About</Link>
                    </li>
                    <li className="nav-link close  mb-4">
                        <i className="far fa-circle-xmark" onClick={handleClick}></i>
                    </li>
                </ul>
                {/* <span href="#" className="nav-link h4 w-100 mb-5">
                    <a href><i className="bx bxl-instagram-alt text-white" /></a>
                    <a href><i className="bx bxl-twitter px-2 text-white" /></a>
                    <a href><i className="bx bxl-facebook text-white" /></a>
                </span> */}
            </div>
            {/* Main Wrapper */}
            <nav className="navbar navbar-expand-lg">

                <h4 className="mx-5 p-1">WIKI-Search <i className="fas fa-search p-2"></i></h4>
                <div className={clicked ? "active-cont p-1" : "p-1 no-active"}>
                    <a className="btn border-0 mx-5" id="menu-btn" onClick={handleClick}>
                        <i className="fas fa-bars"></i></a>
                </div>
            </nav>
        </>


    );
}

export default Navbar;