import React, { useState } from 'react';
import Logo from '../Logo.png';
import '../css/login.css';

const login = () => {
    return (
  <div class="hintergrund">
     <div>
        <img src={Logo} alt="Logo" class="logo-image"/> 
        <main>
        <div class= "outer-flex-container"> 
         <h class="h2">Willkommen zurück!</h>    
        </div> 
        </main>
  
        <footer>
        <h1 class="slogan">"plan today, change tomorrow!"</h1>
        </footer>
      </div>
    </div>
    );
  };
  
  export default login;