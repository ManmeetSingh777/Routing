import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const Navbar = () => {
  return (
    <nav className='navbar'>
     <div className="navbar-left">
        <ul>
          <li><Link to="/">Kalvium❤️</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;