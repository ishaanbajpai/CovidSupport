import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.css';

const  Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Covid Support</h1>
            <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/news">News</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;