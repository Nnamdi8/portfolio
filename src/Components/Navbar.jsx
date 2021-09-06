import React from 'react'
import beauty from '../img/beauty.jpeg';
import {NavLink} from 'react-router-dom';
// import '../styles/navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
           
            <nav className="nav">
            <div className="profile">
                <img src={beauty} alt="" />
            </div>
                <ul className="nav-item">
                   
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                <p>
                    @2021 Lorem Ipsum
                </p>
            </footer>
            </nav>
           
        </div>
    );
}

export default Navbar;