import React, { useState } from 'react';
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
        <p class= "flex-item-WGsText"> WG's </p>
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
        <img src={Logout} alt="Logout" class="logout-image"/>
        </footer>
      </div>
    );
  };
  
  export default Dashboard;