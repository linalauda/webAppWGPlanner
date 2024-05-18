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
          <h class="h2">Hallo</h>
       <div class="grünesRechteck1"></div>
       <div class="grünesRechteck2"></div>
       <div class="grünesRechteck3"></div>
       <div class="grünesRechteck4"></div>
       <div class="grünesRechteck5"></div>
       <div class="grünesRechteck6"></div>
        </main>
  
        <footer>
        <h1 class="slogan">"plan today, change tomorrow!"</h1>
        <img src={Logout} alt="Logout" class="logout-image"/>
        </footer>
      </div>
    );
  };
  
  export default Dashboard;