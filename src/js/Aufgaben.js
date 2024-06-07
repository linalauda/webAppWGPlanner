import React, { useState, useEffect } from 'react';
import '../css/aufgaben.css';
import initialUsers from './userUtils.js'; 

const options = [
  { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im Anschluss das saubere Geschirr verräumen', points: 3, color: 'red', tip: "Um nachhaltiger Geschirr zu spülen, benutze eine Spülmaschine, wenn sie voll beladen ist. Wenn du von Hand spülst, fülle das Spülbecken mit Wasser, statt unter fließendem Wasser zu spülen, und verwende umweltfreundliches Spülmittel." },
  { id: 2, title: 'Küche reinigen', description: 'Die Fläche abwischen, Gegenstände zurück an ihren Platz stellen', points: 2, color: 'orange', tip: "Verwende umweltfreundliche Reinigungsmittel und Lappen aus natürlichen Materialien anstelle von Einwegprodukten." },
  { id: 3, title: 'Staubsaugen', description: 'Alle geteilten Flächen absaugen', points: 2, color: 'yellow', tip: "Verwende einen energieeffizienten Staubsauger mit HEPA-Filter und leere den Staubbehälter statt Einwegbeuteln zu verwenden." },
  { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "Verwende essig- und natronbasierte Reiniger anstelle von chemischen Reinigungsmitteln und setze wiederverwendbare Reinigungstücher ein." },
  { id: 5, title: 'Gemeinschaftsbereiche reinigen', description: 'Oberflächen im Gemeinschaftsbereich abwischen, Gegenstände an ihren Platz zurück räumen, dreckiges Geschirr in die Küche bringen, Müll einsammeln und wegwerfen', points: 2, color: 'turquoise', tip: "Nutze Mehrweg-Reinigungsutensilien wie wiederverwendbare Tücher und Mopps sowie ökologische Reinigungsmittel." },
  { id: 6, title: 'Müll rausbringen', description: 'Müll korrekt sortiert in die richtigen Tonnen oder Säcke an den korrekten Platz räumen', points: 1, color: 'teal', tip: "Trenne deinen Müll konsequent und bringe ihn zu den entsprechenden Recyclingstationen. Vermeide Plastiktüten, indem du wiederverwendbare Müllbeutel nutzt." },
  { id: 7, title: 'Boden wischen', description: 'Alle geteilten Flächen wischen', points: 2, color: 'blue', tip: "Nutze einen wiederverwendbaren Mikrofaser-Mopp und umweltfreundliche Reinigungsmittel, um den Boden zu wischen." },
  { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "Wasche deine Wäsche bei niedrigeren Temperaturen und nutze ökologisches Waschmittel in angemessenen Mengen. Wenn möglich, trockne sie an der Luft statt im Trockner." },
  { id: 9, title: 'Glühbirnen tauschen', description: 'Kaputte Glühbirnen ersetzen', points: 1, color: 'purple', tip: "Ersetze herkömmliche Glühbirnen durch energieeffiziente LED-Lampen, die weniger Strom verbrauchen und länger halten." },
  { id: 10, title: 'Kochen', description: 'Essen vorbereiten und zubereiten', points: 1, color: 'magenta', tip: "Reduziere Lebensmittelverschwendung, indem du Reste verwendest, Lebensmittel richtig lagerst und portionierst, und lokale, saisonale Zutaten bevorzugst." },
  { id: 11, title: 'Einkaufen', description: 'Einkauf aller Artikel von der Einkaufsliste, sowohl Lebensmittel als auch Putzmittel und andere benötigte Sachen für den gemeinschaftlichen Gebrauch/Verbrauch. Pfand wegbringen.', points: 2, color: 'pink', tip: "Kaufe lokal und saisonal ein, vermeide übermäßige Verpackungen und bringe wiederverwendbare Taschen mit." },
  { id: 12, title: 'Altglas wegbringen', description: 'Altglas an einem dafür vorgesehenen Container korrekt entsorgen', points: 1, color: 'lightgray', tip: "Bringe Altglas zu einem Recyclingcontainer in deiner Nähe, um es zu recyceln und neuen Glasprodukten eine zweite Chance zu geben." },
  { id: 13, title: 'Verwaltungstermin wahrnehmen', description: 'Eine Person bleibt Zuhause um Termine wahrzunehmen. Bspw. wenn Handwerker Arbeiten erledigen müssen', points: 1, color: 'darkgray', tip: "Plane deine Termine effizient, um unnötige Wege zu vermeiden, und nutze digitale Kommunikationsmittel wie Videokonferenzen, um Reisen zu minimieren." },
  { id: 14, title: 'Blumen gießen', description: 'Alle Pflanzen im Gemeinschaftsbereich gießen', points: 1, tip: "Verwende Regenwasser oder gesammeltes Wasser aus anderen Quellen anstelle von Leitungswasser und gieße die Pflanzen gezielt und sparsam." }
];

function Aufgaben() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false); 
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); 
  const [tasks, setTasks] = useState([]);

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
    const user = initialUsers.find(user => user.email === userId);
    setSelectedUser(user);
    setShowUserPopup(false);
  };

  const addTaskHandler = () => {
    if (selectedTask && selectedDate && selectedUser) {
      const newTask = {
        ...selectedTask,
        date: selectedDate,
        userId: selectedUser.username,  
        user: selectedUser
      };

      setTasks(prevTasks => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
      setSelectedTask(null);
      setSelectedDate('');
      setSelectedUser(null);
      setShowPopup(false);
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
          <p className="Auswahltext">
            Aufgabe: {selectedTask ? selectedTask.title : <button className="Button" onClick={toggleSecondPopup}>Aufgabe wählen</button>}
          </p>
          <p className="Auswahltext">
            Benutzer: {selectedUser ? selectedUser.username : <button className="Button" onClick={toggleUserPopup}>Benutzer wählen</button>}
          </p>
          <p className="Auswahltext">
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
            {initialUsers.map(user => (
              <li key={user.username}>
                <button id="user-button" onClick={() => selectUser(user.email)}>
                  <img src={user.image} alt={user.username} className="user-image" style={{ width: '50px', height: '50px', borderRadius: '50%' }}/> {user.username}
                </button>
              </li>
            ))}         
          </ul>
        </div>
      )}
    </div>
  );
}

export default Aufgaben;
