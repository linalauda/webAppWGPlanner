import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/aufgaben.css';

const options = [
  { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im Anschluss das saubere Geschirr verräumen', points: 3, color: 'red', tip: "tipp" },
  { id: 2, title: 'Küche reinigen', description: 'Die Fläche abwischen, Gegenstände zurück an ihren Platz stellen', points: 2, color: 'orange', tip: "tipp" },
  { id: 3, title: 'Staubsaugen', description: 'Alle geteilten Flächen absaugen', points: 2, color: 'yellow', tip: "tipp" },
  { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "tipp" },
  { id: 5, title: 'Gemeinschaftsbereiche reinigen', description: 'Oberflächen im Gemeinschaftsbereich abwischen, Gegenstände an ihren Platz zurück räumen, dreckiges Geschirr in die Küche bringen, Müll einsammeln und wegwerfen', points: 2, color: 'turquoise', tip: "tipp" },
  { id: 6, title: 'Müll rausbringen', description: 'Müll korrekt sortiert in die richtigen Tonnen oder Säcke an den korrekten Platz räumen', points: 1, color: 'teal', tip: "tipp" },
  { id: 7, title: 'Boden wischen', description: 'Alle geteilten Flächen wischen', points: 2, color: 'blue', tip: "tipp" },
  { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "tipp" },
  { id: 9, title: 'Glühbirnen tauschen', description: 'Kaputte Glühbirnen ersetzen', points: 1, color: 'purple', tip: "tipp" },
  { id: 10, title: 'Kochen', description: 'Essen vorbereiten und zubereiten', points: 1, color: 'magenta', tip: "tipp" },
  { id: 11, title: 'Einkaufen', description: 'Einkauf aller Artikel von der Einkaufsliste, sowohl Lebensmittel als auch Putzmittel und andere benötigte Sachen für den gemeinschaftlichen Gebrauch/Verbrauch. Pfand wegbringen.', points: 2, color: 'pink', tip: "tipp" },
  { id: 12, title: 'Altglas wegbringen', description: 'Altglas an einem dafür vorgesehenen Container korrekt entsorgen', points: 1, color: 'lightgray', tip: "tipp" },
  { id: 13, title: 'Verwaltungstermin wahrnehmen', description: 'Eine Person bleibt Zuhause um Termine wahrzunehmen. Bspw. wenn Handwerker Arbeiten erledigen müssen', points: 1, color: 'darkgray', tip: "tipp" },
  { id: 14, title: 'Blumen gießen', description: 'Alle Pflanzen im Gemeinschaftsbereich gießen', points: 1, tip: "tipp" }
];

function Aufgaben() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false); // Popup für Benutzer
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // Ausgewählter Benutzer
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]); // Benutzerliste

  useEffect(() => {
    // Alle Benutzer laden
    axios.get('http://127.0.0.1:8000/api/v1/users/?skip=0&limit=100')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Fehler beim Laden der Benutzer:', error));

    // Alle Aufgaben laden
    axios.get('http://127.0.0.1:8000/api/v1/tasks/?skip=0&limit=100')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Fehler beim Laden der Aufgaben:', error));
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setSelectedTask(null);
    setSelectedDate('');
    setSelectedUser(null);
  };

  const toggleSecondPopup = () => {
    setShowSecondPopup(!showSecondPopup);
  };

  const toggleUserPopup = () => {
    setShowUserPopup(!showUserPopup);
  };

  const selectTask = (taskId) => {
    const task = options.find(option => option.id === taskId);
    setSelectedTask(task);
    setShowSecondPopup(false);
  };

  const selectUser = (userId) => {
    const user = users.find(user => user.id === userId);
    setSelectedUser(user);
    setShowUserPopup(false);
  };

  const handleSelectChange = (name, value) => {
    setTasks(prevTasks => ({ ...prevTasks, [name]: value }));
  };

  const addTaskHandler = () => {
    if (selectedTask && selectedDate && selectedUser) {
      const newTask = {
        ...selectedTask,
        date: selectedDate,
        userId: selectedUser.id,
        user: selectedUser
      };

      axios.post('http://127.0.0.1:8000/api/v1/tasks/', {
        title: newTask.title,
        description: newTask.description,
        points: newTask.points,
        color: newTask.color,
        tip: newTask.tip,
        date: newTask.date,
        userId: newTask.userId
      })
        .then(response => {
          setTasks(prevTasks => [...prevTasks, { ...newTask, id: response.data.id }]);
          setSelectedTask(null);
          setSelectedDate('');
          setSelectedUser(null); // Benutzer zurücksetzen
          setShowPopup(false);
        })
        .catch(error => console.error('Fehler beim Hinzufügen der Aufgabe:', error));
    } else {
      alert('Bitte wählen Sie eine Aufgabe, ein Datum und einen Benutzer aus.');
    }
  };

  return (
    <div>
      <button id="plus-button" onClick={togglePopup}>+</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.date} - {task.user.username}
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="popup">
          <h2>Aufgabe hinzufügen</h2>
          <button className="close-button" onClick={togglePopup}>Schließen</button>
          <button className="create-button" onClick={addTaskHandler}>Hinzufügen</button>
          <p>
            Aufgabe: {selectedTask ? selectedTask.title : <button className="Button" onClick={toggleSecondPopup}>Aufgabe wählen</button>}
          </p>
          <p>
            Benutzer: {selectedUser ? selectedUser.username : <button className="Button" onClick={toggleUserPopup}>Benutzer wählen</button>}
          </p>
          <p>
            Datum:
            <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
          </p>
        </div>
      )}
      {showSecondPopup && (
        <div className="popup">
          <h2>Aufgabe wählen</h2>
          <button className="close-button" onClick={toggleSecondPopup}>Schließen</button>
          <ul id="task-list">
            {options.map(option => (
              <li key={option.id}>
                <button id="aufgabe-button" onClick={() => selectTask(option.id)}><span style={{ color: option.color }}>&#8212; </span>{option.title}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showUserPopup && (
        <div className="popup">
          <h2>Benutzer wählen</h2>
          <button className="close-button" onClick={toggleUserPopup}>Schließen</button>
          <ul id="user-list">
            {users.map(user => (
              <li key={user.id}>
                <button id="user-button" onClick={() => selectUser(user.id)}>{user.username}</button>
              </li>
            ))}         
          </ul>
        </div>
      )}
    </div>
  );
}

export default Aufgaben;