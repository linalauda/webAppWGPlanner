import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/user', { profilePicture, username }); // API-Endpunkt anpassen
      alert('Profil aktualisiert');
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Profils', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Profilbild URL:
        <input
          type="text"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
      </label>
      <label>
        Benutzername:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Speichern</button>
    </form>
  );
};

export default EditProfile;
