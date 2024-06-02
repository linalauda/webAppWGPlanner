import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import Calendar from '../calendar.png';
import Checklist from '../checklist.png';
import Ranking from '../medal.png';
import shoppingcart from '../shopping-cart.png';
import Home from '../home_weiß.png';
import Settings from '../settings.png';
import User from '../user.png';
import Logout from '../log-out.png';
import axios from 'axios';
import '../css/dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null); // State für Nutzerdaten

  // Funktion zum Laden der Nutzerdaten nach dem Einloggen
  const loadUserData = async () => {
    try {
      // API-Aufruf, um die Nutzerdaten zu laden (Beispiel)
      const response = await axios.get('/api/userData');

      // Überprüfen, ob die Anfrage erfolgreich war und die Nutzerdaten erhalten wurden
      if (response.data.success) {
        // Nutzerdaten im State speichern
        setUserData(response.data.userData);
      } else {
        console.error('Fehler beim Laden der Nutzerdaten:', response.data.error);
      }
    } catch (error) {
      console.error('Fehler beim Laden der Nutzerdaten:', error);
    }
  };

  // Funktion zum Initialisieren der Nutzerdaten (wird nach dem Einloggen aufgerufen)
  const initializeUserData = () => {
    // Hier können Sie entscheiden, wann und wie die Nutzerdaten geladen werden sollen
    loadUserData(); // Zum Beispiel sofort nach dem Einloggen
  };

  // useEffect-Hook, um die Nutzerdaten nach dem Rendern des Dashboards zu laden
  useEffect(() => {
    initializeUserData();
  }, []); // Leeres Array als Abhängigkeit bedeutet, dass der Effekt nur einmalig nach dem ersten Rendern ausgeführt wird

  return (
    <div className="hintergrund">
      <div>
        <img src={Logo} alt="Logo" className="logo-image" />
        <div className="flex-container-user">
          <div className="flexbox-grauerKreis">
            <img src={User} alt="User" className="flex-item-user-image" />
          </div>
        </div>
      </div>

      <main>
        <div className="outer-flex-container">
          <h2 className="h2">Alles im grünen Bereich</h2>
          <div className="flex-container">
            <Link to="/calendar" className="flex-item-Kalender">
              <p className="flex-item-KalenderText">Kalender</p>
              <img src={Calendar} alt="Calendar" className="calendar-image" />
            </Link>
            <Link to="/todo" className="flex-item-ToDos">
              <p className="flex-item-ToDosText">To Do's</p>
              <img src={Checklist} alt="Checklist" className="checklist-image" />
            </Link>
            <Link to="/ranking" className="flex-item-Rangliste">
              <p className="flex-item-RanglisteText">Rangliste</p>
              <img src={Ranking} alt="Ranking" className="ranking-image" />
            </Link>
            <Link to="/wg-profile" className="flex-item-WGs">
              <p className="flex-item-WGsText">WG</p>
              <img src={Home} alt="Home" className="wgs-image" />
            </Link>
            <Link to="/settings" className="flex-item-Einstellungen">
              <p className="flex-item-EinstellungenText">Einstellungen</p>
              <img src={Settings} alt="Settings" className="einstellungen-image" />
            </Link>
            <Link to="/liste" className="flex-item-Einkaufsliste">
              <p className="flex-item-EinkaufslisteText">Einkaufsliste</p>
              <img src={shoppingcart} alt="shoppingcart" className="einkaufsliste-image" />
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <h1 className="slogan">"plan today, change tomorrow!"</h1>
        <Link to="/logout">
          <img src={Logout} alt="Logout" className="logout-image" />
        </Link>
      </footer>
    </div>
  );
};

export default Dashboard;
