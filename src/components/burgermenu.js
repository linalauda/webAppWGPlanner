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
                    <li class= "Kalender-Text">Kalender</li>
                    <li class= "ToDos-Text">To Do's</li>
                    <li class= "Einkaufsliste-Text">Einkaufsliste</li>
                    <li class= "Rangliste-Text">Rangliste</li>
                    <li class= "WGs-Text">WG's</li>
                    <li class= "Einstellungen-Text">Einstellungen</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default BurgerMenu;