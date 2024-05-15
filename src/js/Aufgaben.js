// Aufgaben.js
import React, { useState } from 'react';
import { addTask } from './taskUtils';
import { useTasks } from './taskUtils';

import '../css/aufgaben.css';

const options = [
    { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im anschluss das saubere Gesachirr verräumen', points: 3, color: 'red', tip: "tipp" },
    { id: 2, title: 'Küche reinigen', description: 'Die Fläche abwischen, Gegenstände zurück an ihren Platz stellen', points: 2, color: 'orange', tip: "tipp" },
    { id: 3, title: 'Staubsaugen', description: 'Alle geteilten Flächen absaugen', points: 2, color: 'yellow', tip: "tipp" },
    { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "tipp" },
    { id: 5, title: 'Gemeinschaftsbereiche reinigen', description: 'Oberflächen im Gemeinschaftsbereich abwischen, Gegenstände an ihren Platz zurück räumen, dreckiges Geschirr in die KKüche bringen, Müll einsammeln und wegwerfen', points: 2, color: 'turquoise', tip: "tipp" },
    { id: 6, title: 'Müll rausbringen', description: 'Müll korrekt sortiert in die richtigen Tonnen oder Säcke an den korrekten Platz räumen', points: 1, color: 'teal', tip: "tipp" },
    { id: 7, title: 'Boden wischen', description: 'Alle geteilten Flächen wischen', points: 2, color: 'blue', tip: "tipp" },
    { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Wasdchmaschine räumen, Waschmaschine anstellen und im asnchluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "tipp" },
    { id: 9, title: 'Glühbirnen tauschen', description: 'kaputte Glühbirnen ersetzen', points: 1, color: 'purple', tip: "tipp" },
    { id: 10, title: 'Kochen', description: 'Essen vorbereiten und zubereiten', points: 1, color: 'magenta', tip: "tipp" },
    { id: 11, title: 'Einkaufen', description: 'Einkauf aller Artikel von der Eibnkaufsliste, sowohl Lebensmittel als auch Putzmittel und andere benötigte Sachen für den gemeinschaftlichen Gebrauch/Verbrauch. Pffand wegbringen.', points: 2, color: 'pink', tip: "tipp" },
    { id: 12, title: 'Altglas wegbringen', description: 'Altglas an einem dafür vorgesehenen Container korrekt entsorgen', points: 1, color: 'lightgray', tip: "tipp" },
    { id: 13, title: 'Verwaltungstermin wahrnehmen', description: 'Eine Person bleibt Zuhause um Termine wahrzunehmen. Bspw. wenn Handwerker arbeiten erledigen müssen', points: 1, color: 'darkgray', tip: "tipp" },
    { id: 14, title: 'Blumen gießen', description: 'Alle Pflanzen im Gemeinschaftsbereich gießen', points: 1, tip: "tipp" }
];

function Aufgaben() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const { tasks, setTasks } = useTasks();
  const [calendarUpdated, setCalendarUpdated] = useState(false); // Hinzufügen dieser Zeile

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleSecondPopup = () => {
    setShowSecondPopup(!showSecondPopup);
  };

  const selectTask = (taskId) => {
    const task = options.find(option => option.id === taskId);
    setSelectedTask(task);
    setShowSecondPopup(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const addTaskHandler = () => {
    if (selectedTask && selectedDate) {
      const newTask = { ...selectedTask, date: selectedDate };
      addTask(newTask, setTasks); // Hier setTasks verwenden
      setSelectedTask(null);
      setSelectedDate('');
      setShowPopup(false);
      setCalendarUpdated(true);
    } else {
      alert('Bitte wählen Sie eine Aufgabe und ein Datum aus.');
    }
  };

  return (
    <div>
      <button id="plus-button" onClick={togglePopup}>+</button>
      {showPopup && (
        <div className="popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black' }}>
          <h2>Aufgabe hinzufügen</h2>
          <p>
            Aufgabe: {selectedTask ? selectedTask.title : <button className ="Button" onClick={toggleSecondPopup}>Aufgabe wählen</button>}
          </p>
          {selectedTask && (
            <>
              <label htmlFor="dateInput">Datum:</label>
              <input
                type="date"
                id="dateInput"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <button className ="Button" onClick={addTaskHandler}>Aufgabe hinzufügen</button>
            </>
          )}
        </div>
      )}
      {showSecondPopup && (
        <div className="popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black' }}>
          <h2>Aufgabe wählen</h2>
          <ul id="task-list">
            {options.map(option => (
              <li key={option.id}>
                <button id="aufgabe-button" onClick={() => selectTask(option.id)}><span style={{ color: option.color }}>&#8212; </span>{option.title}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Aufgaben;