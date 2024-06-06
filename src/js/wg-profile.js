import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import User from '../user.png';
import EditProfile from './EditProfile';
import Logout from '../log-out.png';
import '../css/wg-profile.css';

const Popup = ({ addItem, closePopup }) => {
  const [entry, setEntry] = useState('');

  const handleAddItem = () => {
    addItem(entry);
    setEntry('');
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Neuen Eintrag hinzufügen</h2>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Eintrag schreiben..."
        />
        <button className="edit-button" onClick={handleAddItem}>
          Hinzufügen
        </button>
        <button className="edit-button" onClick={closePopup}>
          Schließen
        </button>
      </div>
    </div>
  );
};

const WGProfile = () => {
  const [userData, setUserData] = useState({
    profilePicture: '',
    username: ''
  });
  const [entries, setEntries] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/wg');
        setUserData(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Nutzerdaten', error);
      }
    };

    fetchUserData();
  }, []);

  const addItem = (item) => {
    setEntries([...entries, item]);
  };

  const removeItem = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="hintergrund">
      <div>
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <Link to="/user-profile">
          <div className="flex-container-user2">
            <div className="flexbox-grauerKreis2">
              <img src={User} alt="User" className="flex-item-user-image" />
            </div>
          </div>
        </Link>
        <main>
          <div className="outer-flex-container">
            <h2 className="h2">Eure Schaltzentrale!</h2>
            <div className="user-info">
              <button className="edit-button" onClick={togglePopup}>
                Neue WG hinzufügen
              </button>
              {showPopup && <Popup addItem={addItem} closePopup={togglePopup} />}
              <button className="list-button" onClick={toggleList}>
                {showList ? 'Liste verbergen' : 'Liste anzeigen'}
              </button>
              {showList && (
                <div className="entries-list">
                  <h3>WGs:</h3>
                  <ul>
                    {entries.map((entry, index) => (
                      <li key={index}>
                        {entry}
                        <button className="delete-button" onClick={() => removeItem(index)}>
                          Löschen
                        </button>
                        <button className="beitreten-button">
                          Beitreten
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </main>
        <footer>
          <h1 className="slogan">"plan today, change tomorrow!"</h1>
        </footer>
        <Link to="/logout">
          <img src={Logout} alt="Logout" className="logout-image" />
        </Link>
      </div>
    </div>
  );
};

export default WGProfile;
