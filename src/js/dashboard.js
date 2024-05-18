import React, { useState } from 'react';
import Logo from '../Logo.png';
import Calendar from '../calendar.png';
import Checklist from '../checklist.png';
import Ranking from '../medal.png';
import shoppingcart from '../shopping-cart.png';
import Home from '../home.png';
import Settings from '../settings.png';
import User from '../user.png';
import Logout from '../log-out.png';
import '../css/dashboard.css';

const Dashboard = () => {
    return (
      <div class="hintergrund">
         <header>
        <img src={Logo} alt="Logo" class="logo-image"/>
        <div class="grauerKreis">
        <img src={User} alt="User" class="user-image"/>
        </div>
        </header>
          
        <main>
          <div>
          <h class="h2">Alles im grünen Bereich,</h>
          </div>
          
      <div class= "flex-container">
        <div class="grünesRechteckKalender">
          <p class= "grünesRechteckKalenderText"> Kalender </p>
        </div>
        <div class="grünesRechteckToDos"></div>
        <div class="grünesRechteckRangliste"></div>
        <div class="grünesRechteckWGs"></div>
        <div class="grünesRechteckEinstellungen"></div>
        <div class="grünesRechteckEinkaufsliste"></div>
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