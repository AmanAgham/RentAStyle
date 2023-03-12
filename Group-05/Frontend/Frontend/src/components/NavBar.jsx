import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import MenuIcon from '@rsuite/icons/Menu';
import { useState } from "react";
import AllProduct from "./AllProducts";

const { Fragment } = require("react");

function NavBar(){
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin)
    console.log("Cart ",state.cart) 



    return (
        <Fragment>
            <div className="clearfix"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky mb-0 " style={{top:0,zIndex:"1000"}}>

            <a href='/' ><h5 style={{width:"100px",marginRight:"20px"}} className="float-left">Rent-A-Style</h5></a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                    
                    <a className="nav-link" href="/"><i class="fa fa-fw fa-home" style={{margin:"5px"}}></i>Home</a>
                    </li>
                    
                   


                    <li className="nav-item active " >
                    <Dropdown title="Category" icon={<MenuIcon />}  appearance="subtle">
                        <Dropdown.Menu title="Men">
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Men/Upper Wear">Upper Wear</Link></Dropdown.Item>
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Men/Bottom Wear">Bottom Wear</Link></Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Menu title="Women">
                            <Dropdown.Item> <Link className="dropdown-item" to="/cat/Women/Upper Wear">Upper Wear</Link></Dropdown.Item>
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Women/Bottom Wear">Bottom Wear</Link></Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Menu title="Kids">
                            <Dropdown.Item> <Link className="dropdown-item" to="/cat/Kids/Upper Wear">Upper Wear</Link></Dropdown.Item>
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Kids/Bottom Wear">Bottom Wear</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>


                    </ul>
                    
                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />                    
                </div>
                </nav>
                
        </Fragment>
    )
}

export default NavBar;
