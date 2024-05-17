import React, { useState } from 'react';
import '../css/registrierungs.css'
import Logo from '../Logo.png';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrierungsdaten:', { email, username, password, confirmPassword });
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
  <div className="hintergrund">
    <img src={Logo} alt="Logo" id="logo-image"/>
    <h1 id="slogan">"plan today, change tomorrow!"</h1>
    <div className="registrierung">
      <div class="header">
        <p>Willkommen bei </p>
        <p style={{color: '#1c6e2f'}}> CoPlan</p>
        <p>!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='E-Mail-Adresse'
          />
        </div>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder='Nutzername'
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Passwort'
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder='Passwort bestätigen'
          />
        </div>
        <button id="login">Zum Log-In</button>
        <button type="submit" id="bestätigen">Weiter</button>
      </form>
    </div>
  </div>
  );
}

export default RegistrationPage;
