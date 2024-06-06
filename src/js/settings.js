import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import User from '../user.png';
import Logo from '../Logo.png';
import Logout from '../log-out.png';
import '../css/settings.css';

const Settings = () => {
  const [taskNotificationsEnabled, setTaskNotificationsEnabled] = useState(false);
  const [rankingNotificationsEnabled, setRankingNotificationsEnabled] = useState(false);
  const [challengeNotificationsEnabled, setChallengeNotificationsEnabled] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Funktion zum Laden der Benachrichtigungseinstellungen des Nutzers
  const loadNotificationSettings = async () => {
    try {
      const response = await axios.get('/api/user/notification-settings');
      if (response.data.success) {
        setTaskNotificationsEnabled(response.data.taskNotificationsEnabled);
        setRankingNotificationsEnabled(response.data.rankingNotificationsEnabled);
        setChallengeNotificationsEnabled(response.data.challengeNotificationsEnabled);
        setUserEmail(response.data.email);
      } else {
        console.error('Fehler beim Laden der Benachrichtigungseinstellungen:', response.data.error);
      }
    } catch (error) {
      console.error('Fehler beim Laden der Benachrichtigungseinstellungen:', error);
    }
  };

  // Funktion zum Aktualisieren der Benachrichtigungseinstellungen des Nutzers
  const updateNotificationSettings = async (settings) => {
    try {
      const response = await axios.post('/api/user/notification-settings', settings);
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

  // Handler für den Schalter für Aufgaben-Benachrichtigungen
  const handleTaskToggle = () => {
    const newValue = !taskNotificationsEnabled;
    setTaskNotificationsEnabled(newValue);
    updateNotificationSettings({ taskNotificationsEnabled: newValue });
  };

  // Handler für den Schalter für Ranking-Benachrichtigungen
  const handleRankingToggle = () => {
    const newValue = !rankingNotificationsEnabled;
    setRankingNotificationsEnabled(newValue);
    updateNotificationSettings({ rankingNotificationsEnabled: newValue });
  };

  // Handler für den Schalter für Challenge-Benachrichtigungen
  const handleChallengeToggle = () => {
    const newValue = !challengeNotificationsEnabled;
    setChallengeNotificationsEnabled(newValue);
    updateNotificationSettings({ challengeNotificationsEnabled: newValue });
  };

  return (
    <div className="hintergrund">
      <div>
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <div className="flex-container-user2">
          <div className="flexbox-grauerKreis2">
            <img src={User} alt="User" className="flex-item-user-image2" />
          </div>
        </div>
        <main>
          <div className="outer-flex-container">
            <h2 className="h2">Alles eine Frage der Einstellung!</h2>
            <div className="notification-toggle-container">
              <p className="notification-text">Werde per E-Mail zu anstehenden Aufgaben informiert</p>
              <div className={`toggle-switch ${taskNotificationsEnabled ? 'enabled' : ''}`} onClick={handleTaskToggle}>
                <div className={`toggle-knob ${taskNotificationsEnabled ? 'enabled' : ''}`}></div>
              </div>
            </div>
            <div className="notification-toggle-container">
              <p className="notification-text">Werde per E-Mail zum aktuellen Ranking informiert</p>
              <div className={`toggle-switch ${rankingNotificationsEnabled ? 'enabled' : ''}`} onClick={handleRankingToggle}>
                <div className={`toggle-knob ${rankingNotificationsEnabled ? 'enabled' : ''}`}></div>
              </div>
            </div>
            <div className="notification-toggle-container">
              <p className="notification-text">Werde per E-Mail informiert, wenn Du die Aufgaben-Challenge für Dich entschieden hast</p>
              <div className={`toggle-switch ${challengeNotificationsEnabled ? 'enabled' : ''}`} onClick={handleChallengeToggle}>
                <div className={`toggle-knob ${challengeNotificationsEnabled ? 'enabled' : ''}`}></div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <h1 className="slogan">"plan today, change tomorrow!"</h1>
          <Link to="/logout">
            <img src={Logout} alt="Logout" className="logout-image"/>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Settings;
