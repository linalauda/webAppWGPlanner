import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const options = [
    { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im anschluss das saubere Gesachirr verräumen', points: 3 },
    { id: 2, title: 'Küche reinigen', description: 'Die Fläche abwischen, Gegenstände zurück an ihren Platz stellen', points: 2 },
    { id: 3, title: 'Staubsaugen', description: 'Alle geteilten Flächen absaugen', points: 2 },
    { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3 },
    { id: 5, title: 'Gemeinschaftsbereiche reinigen', description: 'Oberflächen im Gemeinschaftsbereich abwischen, Gegenstände an ihren Platz zurück rääumen, dreckiges Geschirr in die KKüche bringen, Müll einsammeln und wegwerfen', points: 2 },
    { id: 6, title: 'Müll rausbringen', description: 'Müll korrekt sortiert in die richtigen Tonnen oder Säcke an den korrekten Platz räumen', points: 1 },
    { id: 7, title: 'Boden wischen', description: 'Alle geteilten Flächen wischen', points: 2 },
    { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Wasdchmaschine räumen, Waschmaschine anstellen und im asnchluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2 },
    { id: 9, title: 'Glühbirnen tauschen', description: 'kaputte Glühbirnen ersetzen', points: 1 },
    { id: 10, title: 'Kochen', description: 'Essen vorbereiten und zubereiten', points: 1 },
    { id: 11, title: 'Einkaufen', description: 'Einkauf aller Artikel von der Eibnkaufsliste, sowohl Lebensmittel als auch Putzmittel und andere benötigte Sachen für den gemeinschaftlichen Gebrauch/Verbrauch. Pffand wegbringen.', points: 2 },
    { id: 12, title: 'Altglas wegbringen', description: 'Altglas an einem dafür vorgesehenen Container korrekt entsorgen', points: 1 },
    { id: 13, title: 'Verwaltungstermin wahrnehmen', description: 'Eine Person bleibt Zuhause um Termine wahrzunehmen. Bspw. wenn Handwerker arbeiten erledigen müssen', points: 1 },
    { id: 14, title: 'Blumen gießen', description: 'Alle Pflanzen im Gemeinschaftsbereich gießen', points: 1 }
];

function DropdownMenu() {
  return (
    <div>
      <h2>Dropdown Menu</h2>
      <ul>
        {options.map(option => (
          <li key={option.id}>
            <Link to={`/detail/${option.id}`}>{option.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
