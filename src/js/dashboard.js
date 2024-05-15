import React, { useState } from 'react';
import Logo from '../Logo.png';
import '../css/dashboard.css';

const Dashboard = () => {
    return (
      <div>
        <header>
          <img src={Logo} alt="Logo" />
          <h1>Alles im grünen Bereich,</h1>
          {/* Hier könnte beispielsweise ein Menü platziert werden */}
        </header>
  
        <main>
        <   p>Dies ist der Hauptinhalt meiner Webseite.</p>
        </main>
  
        <footer>
          <p>&copy; 2024 Meine Webseite. Alle Rechte vorbehalten.</p>
          {/* Hier könnte der Footer der Seite platziert werden */}
        </footer>
      </div>
    );
  };
  
  export default Dashboard;