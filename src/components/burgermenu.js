import React, { useState } from 'react';
import './burgermenu.css';


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="burger-menu">
        <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
          <ul>
                    <li>Kalender</li>
                    <li>To Do's</li>
                    <li>Einkaufsliste</li>
                    <li>Rangliste</li>
                    <li>WG's</li>
                    <li>Einstellungen</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default BurgerMenu;