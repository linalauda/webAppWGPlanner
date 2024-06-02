import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Logo.png';
import '../css/settings.css';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Funktion zum Laden der Benachrichtigungseinstellungen des Nutzers
  const loadNotificationSettings = async () => {
    try {
      const response = await axios.get('/api/user/notification-settings');
      if (response.data.success) {
        setNotificationsEnabled(response.data.notificationsEnabled);
        setUserEmail(response.data.email);
      } else {
        console.error('Fehler beim Laden der Benachrichtigungseinstellungen:', response.data.error);
      }
    } catch (error) {
      console.error('Fehler beim Laden der Benachrichtigungseinstellungen:', error);
    }
  };

  // Funktion zum Aktualisieren der Benachrichtigungseinstellungen des Nutzers
  const updateNotificationSettings = async (enabled) => {
    try {
      const response = await axios.post('/api/user/notification-settings', {
        notificationsEnabled: enabled,
      });
      if (!response.data.success) {
        console.error('Fehler beim Aktualisieren der Benachrichtigungseinstellungen:', response.data.error);
      }
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Benachrichtigungseinstellungen:', error);
    }
  };

  // useEffect-Hook, um die Benachrichtigungseinstellungen nach dem Rendern der Seite zu laden
  useEffect(() => {
    loadNotificationSettings();
  }, []);

  // Handler für den Schalter
  const handleToggle = () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    updateNotificationSettings(newValue);
  };

  return (
    <div className="hintergrund">
      <div>
        <img src={Logo} alt="Logo" className="logo-image" />
        <main>
          <div className="outer-flex-container">
            <h2 className="h2">Alles eine Frage der Einstellung!</h2>
            <div className="notification-toggle-container">
              <p className="notification-text">Push-Benachrichtigungen per E-Mail</p>
              <div className={`toggle-switch ${notificationsEnabled ? 'enabled' : ''}`} onClick={handleToggle}>
                <div className={`toggle-knob ${notificationsEnabled ? 'enabled' : ''}`}></div>
              </div>
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

export default Settings;
