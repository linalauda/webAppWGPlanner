// src/RankingComponent.js
import React, { useState, useEffect } from 'react';
import Logo from '../Logo.png';
import Logout from '../log-out.png';
import User from '../user.png';
import Uhr from '../clock.png';
import { useBurgerMenu } from '../components/burgermenu';
import '../css/ranking.css';
import '../components/burgermenu.css';

function Timer({ onStart, onStop }) {
  const [startTime, setStartTime] = useState('');
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerId, setTimerId] = useState(null);

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  const startTimer = () => {
    const start = new Date(startTime).getTime();
    const now = new Date().getTime();
    
    if (start <= now) {
      alert('Bitte wählen Sie eine Zeit in der Zukunft.');
      return;
    }

    const timer = setInterval(() => {
      const current = new Date().getTime();
      const timeLeft = start - current;
      if (timeLeft <= 0) {
        clearInterval(timer);
        setRemainingTime(0);
        setTimerId(null);
        onStop();
      } else {
        setRemainingTime(timeLeft);
      }
    }, 1000);

    setTimerId(timer);
    onStart();
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setRemainingTime(null);
    setTimerId(null);
    onStop();
  };

  const handleChange = (event) => {
    setStartTime(event.target.value);
  };

  const formatTime = (milliseconds) => {
    if (isNaN(milliseconds)) return '00:00:00';
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex-container-timer">
      <img src={Uhr} alt="Uhr" className="clock-image" />
      <div className="timer-container">
        <input
          type="datetime-local"
          className="timer-input"
          value={startTime}
          onChange={handleChange}
          min={getCurrentDateTime()}
        />
        <div className="timer-buttons">
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
        </div>
        {remainingTime !== null && (
          <div className="timer-display">
            <h3 className="h3">Eure Frist: <span>{formatTime(remainingTime)}</span></h3>
          </div>
        )}
      </div>
    </div>
  );
}

const Ranking = () => {
  const [users, setUsers] = useState([]);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (isTimerActive) {
      const interval = setInterval(() => {
        fetchUsers()
          .then(data => setUsers(data))
          .catch(error => console.error('Fehler beim Laden der Nutzer:', error));
      }, 5000); // Aktualisiert die Rangliste alle 5 Sekunden, wenn der Timer aktiv ist

      return () => clearInterval(interval);
    }
  }, [isTimerActive]);

  const fetchUsers = async () => {
    // Hier sollte die Logik zum Laden der Nutzer aus der Datenbank implementiert werden
    // Beispiel: Annahme, dass die Nutzerdaten als Array von Objekten zurückgegeben werden
    return [
      { id: 1, name: 'Alina', points: 50 },
      { id: 2, name: 'Rudi', points: 30 },
      { id: 3, name: 'Tijana', points: 70 },
      // Weitere Nutzerdaten...
    ];
  };

  // Sortiere die Nutzerliste basierend auf der Summe ihrer Punkte
  const sortedUsers = users.sort((a, b) => b.points - a.points);

  return (
    <div className="hintergrund">
      <div>
        <img src={Logo} alt="Logo" className="logo-image" />
        <div className="flex-container-user2">
          <div className="flexbox-grauerKreis2">
            <img src={User} alt="User" className="flex-item-user-image" />
          </div>
        </div>
      </div>

      <main>
        <div className="outer-flex-container2">
          <h2 className="h2">Schau wer das Rennen macht!</h2>
          <div>
            <Timer
              onStart={() => setIsTimerActive(true)}
              onStop={() => setIsTimerActive(false)}
            />
          </div>
          <div className="user-ranking">
            <ol>
              {sortedUsers.map((user, index) => (
                <li key={user.id}>
                  <span className="rank">{index + 1}</span>
                  <span className="username">{user.name}</span>
                  <span className="points">Punkte: {user.points}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <footer>
        <h1 className="slogan">"plan today, change tomorrow!"</h1>
        <img src={Logout} alt="Logout" className="logout-image" />
      </footer>
    </div>
  );
};

export default Ranking;
