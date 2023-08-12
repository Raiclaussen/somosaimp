import React from 'react';
import './Navbar.css';
import logoImage from '../assets/logosomosaimp.png';
import CartWidgets from '../CartWidgets/CartWidgets';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="Logo Somos AIMP" />
      </div>
      <ul className="navbar-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li><CartWidgets /></li>
      </ul>
    </nav>
  );
}

export default Navbar;




