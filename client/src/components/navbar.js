import React from 'react';
import {Link} from 'react-router-dom';

 function Navbar() {
    return (
        <div className="navbar-main">
            <ul className="nav justify-content-center">
  
            <li className="nav-item">
                <Link to="/auth" href="!#" className="navbar-brand ">Войти</Link>
            </li>

            <li className="nav-item">
                <Link to="/register" href="!#" className="navbar-brand" >Регистрация</Link>
            </li>



</ul>
        </div>
    )
}

export default Navbar;
