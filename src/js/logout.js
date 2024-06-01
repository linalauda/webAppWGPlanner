import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import axios from 'axios';
import '../css/logout.css';

const Logout = () => {
  return (
    <div className="hintergrund">
      <div>
        <img src={Logo} alt="Logo" className="logo-image" />
        <main>
          <div className="outer-flex-container">
            <h2 className="h2">Wir sehen uns!</h2>
            <div className="logout-container">
              <p class="TextLogout"> Du wurdest erfolgreich ausgeloggt.</p>
              <Link to="/">
                  <button type="button" className="login-button2">Zurück zum Login</button>
              </Link>
            </div>
          </div>
        </main>
        <footer>
          <h1 className="slogan">"plan today, change tomorrow!"</h1>
        </footer>
      </div>
    </div>
  );
};

export default Logout;
