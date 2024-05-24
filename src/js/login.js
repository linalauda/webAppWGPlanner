import React, { useState } from 'react';
import Logo from '../Logo.png';
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
 
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
  <div class="hintergrund">
     <div>
        <img src={Logo} alt="Logo" class="logo-image"/> 
        <main>
        <div class= "outer-flex-container"> 
         <h class="h2">Willkommen zurück!</h> 
         <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>E-Mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='E-Mail-Adresse'
          />
        </div>
        <div className="form-group">
          <label>Passwort</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Passwort'
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" class="Login-Button">Login</button>
      </form>
    </div>  
        </div> 
        </main>
        <footer>
        <h1 class="slogan">"plan today, change tomorrow!"</h1>
        </footer>
      </div>
    </div>
    );
  };
}
  export default Login;