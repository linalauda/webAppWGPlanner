import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/aufgaben.css';

const options = [
    { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im anschluss das saubere Gesachirr verräumen', points: 3, color: 'red' },
    { id: 2, title: 'Küche reinigen', description: 'Die Fläche abwischen, Gegenstände zurück an ihren Platz stellen', points: 2, color: 'orange' },
    { id: 3, title: 'Staubsaugen', description: 'Alle geteilten Flächen absaugen', points: 2, color: 'yellow' },
    { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green' },
    { id: 5, title: 'Gemeinschaftsbereiche reinigen', description: 'Oberflächen im Gemeinschaftsbereich abwischen, Gegenstände an ihren Platz zurück räumen, dreckiges Geschirr in die KKüche bringen, Müll einsammeln und wegwerfen', points: 2, color: 'turquoise' },
    { id: 6, title: 'Müll rausbringen', description: 'Müll korrekt sortiert in die richtigen Tonnen oder Säcke an den korrekten Platz räumen', points: 1, color: 'teal' },
    { id: 7, title: 'Boden wischen', description: 'Alle geteilten Flächen wischen', points: 2, color: 'blue' },
    { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Wasdchmaschine räumen, Waschmaschine anstellen und im asnchluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy' },
    { id: 9, title: 'Glühbirnen tauschen', description: 'kaputte Glühbirnen ersetzen', points: 1, color: 'purple' },
    { id: 10, title: 'Kochen', description: 'Essen vorbereiten und zubereiten', points: 1, color: 'magenta' },
    { id: 11, title: 'Einkaufen', description: 'Einkauf aller Artikel von der Eibnkaufsliste, sowohl Lebensmittel als auch Putzmittel und andere benötigte Sachen für den gemeinschaftlichen Gebrauch/Verbrauch. Pffand wegbringen.', points: 2, color: 'pink' },
    { id: 12, title: 'Altglas wegbringen', description: 'Altglas an einem dafür vorgesehenen Container korrekt entsorgen', points: 1, color: 'lightgray' },
    { id: 13, title: 'Verwaltungstermin wahrnehmen', description: 'Eine Person bleibt Zuhause um Termine wahrzunehmen. Bspw. wenn Handwerker arbeiten erledigen müssen', points: 1, color: 'darkgray' },
    { id: 14, title: 'Blumen gießen', description: 'Alle Pflanzen im Gemeinschaftsbereich gießen', points: 1 }
];

function Aufgaben() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

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

  return (
    <div>
      <button id="button" onClick={togglePopup}>+</button>
      {showPopup && (
        <div className="popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black' }}>
          <h2>Aufgabe hinzufügen</h2>
          <p>Aufgabe: {selectedTask ? selectedTask.title : <button onClick={toggleSecondPopup}>Aufgabe wählen</button>}</p>
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
