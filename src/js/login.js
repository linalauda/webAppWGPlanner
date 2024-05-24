import React, { useState } from 'react';
import Logo from '../Logo.png';
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simuliere einen API-Aufruf
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      // Weiterleitung oder Speicherung des Tokens hier
    } else {
      setErrorMessage('Invalid email or password');
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
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
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
  
  export default Login;