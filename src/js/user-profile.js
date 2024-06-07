import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import Logout from '../log-out.png';
import '../css/user-profile.css';
import initialUsers from './userUtils.js'; 

const WGProfile = () => {
  const [userData, setUserData] = useState({
    profilePicture: '',
    username: '',
    bio: ''
  });

  useEffect(() => {
    const aktuellerUser = initialUsers[0];
    setUserData({
      profilePicture: aktuellerUser.image,
      username: aktuellerUser.username,
      bio: aktuellerUser.bio
    });
  }, []);

  return (
    <div className="hintergrund">
      <div>
        <Link to="/dashboard">
        <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <main>
          <div className="outer-flex-container-userprofile">
            <h2 className="h2">Me, Myself & I!</h2>
            <div className="user-info">
              <img src={userData.profilePicture} alt="Profilbild" className="profile-picture" />
              <h3>{userData.username}</h3>
              
            </div>
          </div>
          <div className="beschreibung">
                <p>Über mich:</p>
                <p>{userData.bio}</p>
          </div>
        </main>
        <footer>
          <h1 className="slogan">"plan today, change tomorrow!"</h1>
        </footer>
        <Link to="/logout">
        <img src={Logout} alt="Logout" className="logout-image"/>
        </Link>
      </div>
    </div>
  );
};

export default WGProfile;
