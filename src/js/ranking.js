import React, { useState, useEffect } from 'react';
import Logo from '../Logo.png';
import Logout from '../log-out.png';
import User from '../user.png';
import Uhr from '../clock.png';
import { useBurgerMenu } from '../components/burgermenu';
import '../css/ranking.css';
import '../components/burgermenu.css';

function Timer() {
  const [startTime, setStartTime] = useState('');
  const [currentTime, setCurrentTime] = useState(null);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    const start = new Date(startTime).getTime();

    const timer = setInterval(() => {
      const current = new Date().getTime();
      setCurrentTime(current - start);
    }, 1000);

    setTimerId(timer);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setCurrentTime(null);
  };

  const handleChange = (event) => {
    setStartTime(event.target.value);
  };

  return (
    <div class="outer-flex-container-clock">
    <img src={Uhr} alt="Uhr" className="clock-image" />
    <div className="flex-container">
    <div className="timer-container">
      <input
        type="datetime-local"
        className="timer-input"
        value={startTime}
        onChange={handleChange}
      />
      <div className="timer-buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
      {currentTime && (
        <div className="timer-display">
          <h3>Aktuelle Zeit:</h3>
          <p>{new Date(currentTime).toISOString().substr(11, 8)}</p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

const Ranking = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Funktion zum Laden der Nutzer aus der Datenbank
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error('Fehler beim Laden der Nutzer:', error));
  }, []);

  const fetchUsers = async () => {
    // Hier sollte die Logik zum Laden der Nutzer aus der Datenbank implementiert werden
    // Beispiel: Annahme, dass die Nutzerdaten als Array von Objekten zurückgegeben werden
    return [
      { id: 1, name: 'Alice', points: 50 },
      { id: 2, name: 'Bob', points: 30 },
      { id: 3, name: 'Charlie', points: 70 },
      // Weitere Nutzerdaten...
    ];
  };

  // Sortiere die Nutzerliste basierend auf der Summe ihrer Punkte
  const sortedUsers = users.sort((a, b) => a.points - b.points);

  return (
    <div className="hintergrund">
      <div>
        <img src={Logo} alt="Logo" className="logo-image" />
        <div className="flex-container-user">
          <div className="flexbox-grauerKreis">
            <img src={User} alt="User" className="flex-item-user-image" />
          </div>
        </div>
      </div>

      <main>
        <div className="outer-flex-container">
          <h2 className="h2">Schau wer das Rennen macht!</h2>
          <div><Timer /></div>
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
