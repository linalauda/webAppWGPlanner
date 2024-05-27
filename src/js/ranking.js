import React, { useState } from 'react';
import Logo from '../Logo.png';
import { useBurgermenu } from '../components/burgermenu'; 
import '../css/ranking.css';
import '../components/burgermenu.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simuliere einen API-Aufruf
    if (email === 'test@example.com' && password === 'Passwort') {
      alert('Login erfolgreich!');

      // Weiterleitung oder Speicherung des Tokens hier
    } else {
      setErrorMessage('Ungültige Eingabe');
    }
  };

  return (
    <div className="hintergrund">
      <div>
        <img src={Logo} alt="Logo" className="logo-image" />
        <main>
          <div className="outer-flex-container">
            <h2 className="h2">Willkommen zurück!</h2>
            <div className="login-container">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="E-Mail-Adresse"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    placeholder="Passwort"
                  />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="Login-Button">Login</button>
              </form>
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

export default Login;
