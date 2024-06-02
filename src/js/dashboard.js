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
  <div class="hintergrund">
         <div>
        <img src={Logo} alt="Logo" class="logo-image"/>
        <div class="flex-container-user">
          <div class="flexbox-grauerKreis">
          <img src={User} alt="User" class="flex-item-user-image"/>
          </div>
        </div>
        </div>
          
        <main>
    <div class= "outer-flex-container"> 
      <h class="h2">Alles im grünen Bereich</h>    
      <div class= "flex-container">
        <div class="flex-item-Kalender">
          <p class= "flex-item-KalenderText"> Kalender </p>
          <img src={Calendar} alt="Calendar" class="calendar-image"/>
        </div>
        <div class="flex-item-ToDos">
          <p class= "flex-item-ToDosText"> To Do's </p>
          <img src={Checklist} alt="Checklist" class="checklist-image"/>
        </div>
        <div class="flex-item-Rangliste">
        <p class= "flex-item-RanglisteText"> Rangliste </p>
        <img src={Ranking} alt="Ranking" class="ranking-image"/>
        </div>
        <div class="flex-item-WGs">
        <p class= "flex-item-WGsText"> WG </p>
        <img src={Home} alt="Home" class="wgs-image"/>
        </div>
        <div class="flex-item-Einstellungen">
        <p class= "flex-item-EinstellungenText"> Einstellungen </p>
        <img src={Settings} alt="Settings" class="einstellungen-image"/>
        </div>
        <div class="flex-item-Einkaufsliste">
        <p class= "flex-item-EinkaufslisteText"> Einkaufsliste </p>
        <img src={shoppingcart} alt="shoppingcart" class="einkaufsliste-image"/>
        </div>
      </div>
    </div> 
        </main>
        <footer>
        <h1 class="slogan">"plan today, change tomorrow!"</h1>
        <Link to="/logout">
        <img src={Logout} alt="Logout" class="logout-image"/>
        </Link>
        </footer>
      </div>
    );
  };
  
  export default Dashboard;