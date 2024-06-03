import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li className="Kalender-Text">
              <Link to="/calendar">Kalender</Link>
            </li>
            <li className="ToDos-Text">
              <Link to="/todo">To Do's</Link>
            </li>
            <li className="Einkaufsliste-Text">
              <Link to="/liste">Einkaufsliste</Link>
            </li>
            <li className="Rangliste-Text">
              <Link to="/ranking">Rangliste</Link>
            </li>
            <li className="WGs-Text">
              <Link to="/wg-profile">WG's</Link>
            </li>
            <li className="Einstellungen-Text">
              <Link to="/settings">Einstellungen</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};
  
export default BurgerMenu;
