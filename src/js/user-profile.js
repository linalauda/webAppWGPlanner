import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import EditProfile from './EditProfile';
import Logout from '../log-out.png';
import '../css/user-profile.css';

const WGProfile = () => {
  const [userData, setUserData] = useState({
    profilePicture: '',
    username: ''
  });

  useEffect(() => {
    // Funktion zum Abrufen der Nutzerdaten
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // API-Endpunkt anpassen
        setUserData(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Nutzerdaten', error);
      }

    };

    fetchUserData();
  }, []);

  return (
    <div className="hintergrund">
      <div>
        <Link to="/dashboard">
        <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <main>
          <div className="outer-flex-container">
            <h2 className="h2">Me, Myself & I!</h2>
            <div className="user-info">
              <img src={userData.profilePicture} alt="Profilbild" className="profile-picture" />
              <h3>{userData.username}</h3>
            </div>
          </div>
        </main>
        <footer>
          <h1 className="slogan">"plan today, change tomorrow!"</h1>
        </footer>
        <Link to="/logout">
        <img src={Logout} alt="Logout" class="logout-image"/>
        </Link>
      </div>
    </div>
  );
};

export default WGProfile;
