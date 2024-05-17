import { useState } from 'react';

// Initialisiere die Liste mit Testaufgaben
const initialTasks = [
    { 
        task: { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im Anschluss das saubere Geschirr verräumen', points: 3, color: 'red', tip: "tipp" }, 
        date: '2024-05-15',
        person: 'nutzer123'
    },
    { 
        task: { id: 2, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Waschbecken und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "tipp" }, 
        date: '2024-05-20',
        person: 'nutzer123'
    },
    { 
        task: { id: 3, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "tipp" }, 
        date: '2024-05-25',
        person: 'nutzer123'
    },
    { 
        task: { id: 2, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Waschbecken und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "tipp" }, 
        date: '2024-05-25',
        person: 'nutzer123'
    },
    { 
        task: { id: 3, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "tipp" }, 
        date: '2024-06-13', 
        person: 'nutzer123'
    }
];
  
  // Diese Funktion gibt die aktuelle Liste der erstellten Aufgaben zurück
  export function useTasks() {
    const [tasks, setTasks] = useState(initialTasks);
  
    // Funktion zum Hinzufügen einer neuen Aufgabe
    return { tasks, setTasks };
  }
  
  // Funktion zum Hinzufügen einer neuen Aufgabe
  export function addTask(newTask, setTasks) {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }
  