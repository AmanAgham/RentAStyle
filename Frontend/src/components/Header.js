import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs"
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Free Shipping over ₹1999 & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:
                                <a className="text-white" href="tel:+91 9834516318">
                                    +91-9834516318
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
            <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">Rent-A-Style</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div class="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search product here.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"><BsSearch></BsSearch></span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                             <div>
                                <Link className="d-flex align-items-center gap-30 text-white">
                                    <img src="images/user.svg" alt="Login"></img>
                                    <p className="mb-0">Login</p>
                                </Link>
                             </div>
                             <div>
                                <Link className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/user.svg" alt="SignUp"></img>
                                    <p className="mb-0">Sign-up</p>
                                </Link>
                             </div>
                             <div>
                                <Link className="d-flex align-items-center gap-10 text-white">
                                    <img src="images/cart.svg" alt="SignUp"></img>
                                    <p className="mb-0">MyCart</p>
                                </Link>
                             </div>
                             <div>
                                <link>
                                    
                                </link>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-bottom py-3">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-40">
                        <div>
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                         <img src="images/menu.svg"></img>
                         <span className="me-5 d-inline-block">Shop Categories</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item text-white" href="#">Womens</a></li>
                          <li><a class="dropdown-item text-white" href="#">Mens</a></li>
                          <li><a class="dropdown-item text-white" href="#">Children</a></li>
                        </ul>
            </div>
            </div>
            <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                    <NavLink to="/Home" >Home</NavLink>
                    <NavLink to="/" >OurStore</NavLink>
                    <NavLink to="/" >Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </header>
        </>
    );
};

export default Header;