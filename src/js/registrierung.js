import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/registrierungs.css';
import Logo from '../Logo.png';
import User from '../user.png';
import Checked from '../checked.png';
import ScrollableSelect from './scroll';
import axios from 'axios';

function RegistrationPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    day: 1,
    month: 1,
    year: new Date().getFullYear(),
    profileImage: null,
    bio: ''
  });

  const [showDOBForm, setShowDOBForm] = useState(false);
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);
  const [showFinishedForm, setShowFinishedForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setErrorMessage('Passwort und Passwort bestätigen stimmen nicht überein');
      return;
    }
    setErrorMessage('');
    setShowDOBForm(true);
  };

  const handleDOBSubmit = (e) => {
    e.preventDefault();
    setShowDOBForm(false);
    setShowAdditionalForm(true);
  };

  const handleAdditionalFormSubmit = (e) => {
    e.preventDefault();
    setShowAdditionalForm(false);
    setShowThirdForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prevUser => ({ ...prevUser, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleThirdFormSubmit = (e) => {
    e.preventDefault();
    setShowThirdForm(false);
    setShowFinishedForm(true);
    console.log('User data:', user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  
  const createUser = async (user) => {
    const data = {
      email: user.email, 
      username: user.username,
      password: user.password,
      birthdate: `${user.year}-${user.month < 10 ? `0${user.month}`: user.month}-${user.day < 10 ? `0${user.day}`: user.day}`,
      image: user.profileImage
    };
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/users/post', data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

  return (
    <div className="hintergrund">
      <img src={Logo} alt="Logo" id="logo-image" />
      <h1 id="slogan">"plan today, change tomorrow!"</h1>
      <div className="header">
        <h2>Willkommen bei</h2>
        <h2 style={{ color: '#1c6e2f' }}>CoPlan</h2>
        <h2>!</h2>
      </div>
      <div className="registrierung">
        {showDOBForm ? (
          <form onSubmit={handleDOBSubmit} className="dob-form">
            <p>Wähle dein Geburtsdatum aus</p>
            <div id="gebDatum">
              <ScrollableSelect
                value={user.day}
                options={days}
                onChange={(value) => handleSelectChange('day', value)}
              />
              <ScrollableSelect
                value={user.month}
                options={months}
                onChange={(value) => handleSelectChange('month', value)}
              />
              <ScrollableSelect
                value={user.year}
                options={years}
                onChange={(value) => handleSelectChange('year', value)}
              />
            </div>
            <button type="button" id="zurück" onClick={() => setShowDOBForm(false)}>Zurück</button>
            <button type="submit" id="bestätigen">Weiter</button>
          </form>
        ) : showAdditionalForm ? (
          <form onSubmit={handleAdditionalFormSubmit} className="profilpicture-form">
            <div className="profile-image-container">
              <img
                src={user.profileImage || User}
                alt="Profile"
                className="profile-image"
                onClick={handleImageClick}
              />
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
            <button type="button" id="zurück" onClick={() => { setShowDOBForm(true); setShowAdditionalForm(false); setShowThirdForm(false); }}>Zurück</button>
            <button type="submit" id="bestätigen">Weiter</button>
          </form>
        ) : showThirdForm ? (
          <form onSubmit={handleThirdFormSubmit} className="third-form">
            <div>
              <input
                type="text"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                className="Bio"
                placeholder="Schreibe etwas über dich..."
              />
            </div>
            <button type="button" id="zurück" onClick={() => { setShowAdditionalForm(true); setShowThirdForm(false); }}>Zurück</button>
            <button type="submit" id="bestätigen" onClick={() => createUser(user)}>Weiter</button>
          </form>
        ) : showFinishedForm ? (
          <div className="finished-form">
            <img src={Checked} alt="Checked" className="checked"/>
            <div className="user-info">
              <h3>Registrierungsdaten</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Geburtsdatum:</strong> {`${user.day}.${user.month}.${user.year}`}</p>
              {user.profileImage && <img src={user.profileImage} alt="Profile" className="profile-image"/>}
              <p><strong>Über dich:</strong> {user.bio}</p>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div>
                <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required placeholder='E-Mail-Adresse'/>
              </div>
              <div>
                <input type="text" id="username" name="username" value={user.username} onChange={handleChange} required placeholder='Nutzername'/>
              </div>
              <div>
                <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required placeholder='Passwort'/>
              </div>
              <div>
                <input type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required placeholder='Passwort bestätigen' />
              </div>
              <button type="button" id="login" onClick={() => navigate('/')}>Zum Log-In</button>
              <button type="submit" id="bestätigen">Weiter</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;