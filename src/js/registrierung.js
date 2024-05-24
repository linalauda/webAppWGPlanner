import React, { useState, useRef } from 'react';
import '../css/registrierungs.css';
import Logo from '../Logo.png';
import User from '../user.png';
import Checked from '../checked.png';
import ScrollableSelect from './scroll';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDOBForm, setShowDOBForm] = useState(false);
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);
  const [showFinishedForm, setShowFinishedForm] = useState(false);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [thirdInputValue, setThirdInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrierungsdaten:', { email, username, password, confirmPassword });
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setShowDOBForm(true);
  };

  const handleDOBSubmit = (e) => {
    e.preventDefault();
    console.log('Geburtsdatum:', { day, month, year });
    setShowDOBForm(false);
    setShowAdditionalForm(true);
  };

  const handleAdditionalFormSubmit = (e) => {
    e.preventDefault();
    console.log('Additional form submitted');
    console.log('Selected Image:', selectedImage);
    setShowAdditionalForm(false);
    setShowThirdForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleThirdFormSubmit = (e) => {
    e.preventDefault();
    console.log('Third form submitted');
    console.log('Third input value:', thirdInputValue);
    setShowThirdForm(false);
    setShowFinishedForm(true);
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
                value={day}
                options={days}
                onChange={setDay}
              />
              <ScrollableSelect
                value={month}
                options={months}
                onChange={setMonth}
              />
              <ScrollableSelect
                value={year}
                options={years}
                onChange={setYear}
              />
            </div>
            <button type="button" id="login" onClick={() => setShowDOBForm(false)}>Zurück</button>
            <button type="submit" id="bestätigen">Weiter</button>
          </form>
        ) : showAdditionalForm ? (
          <form onSubmit={handleAdditionalFormSubmit} className="profilpicture-form">
            <div className="profile-image-container">
              <img
                src={selectedImage || User } 
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
            <button type="button" id="login" onClick={() => { setShowDOBForm(true); setShowAdditionalForm(false); setShowThirdForm(false);}}>Zurück</button>
            <button type="submit" id="bestätigen">Weiter</button>
          </form>
        ) : showThirdForm ? (
          <form onSubmit={handleThirdFormSubmit} className="third-form">
            <div>
              <input
              type="text"
              value={thirdInputValue}
              onChange={(e) => setThirdInputValue(e.target.value)}
              className="Bio"
              placeholder="Schreibe etwas über dich..."
              />
            </div>
            <button type="button" id="login" onClick={() => setShowAdditionalForm(true) && setShowThirdForm(false)}>Zurück</button>
            <button type="submit" id="bestätigen">Weiter</button>
          </form>
        ) : showFinishedForm ? (
          <div>
            <img src={Checked} alt="Checked" className="checked"/>
          </div>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
