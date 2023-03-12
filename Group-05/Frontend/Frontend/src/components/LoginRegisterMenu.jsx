import { Link } from "react-router-dom";


function LoginRegisterMenu(){
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{marginRight:"20px"}} href="#" id="navbarDropdownMenuLink" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-sign-in" style={{margin:"5px"}}></i>
                Login
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/alogin">Admin</Link>
                <Link className="dropdown-item" to="/slogin">Seller</Link>                        
                <Link className="dropdown-item" to="/clogin">Customer</Link>                        
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{marginRight:"68px"}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user-plus" style={{margin:"5px"}}></i>
                Register
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/regsupplier">Seller</Link>
                <Link className="dropdown-item" to="/register">Customer</Link>                        
                </div>
            </li>
        </ul>
    )
}

export default LoginRegisterMenu;