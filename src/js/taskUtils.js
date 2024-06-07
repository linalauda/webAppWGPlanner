import { useState } from 'react';
import initialUsers from './userUtils.js';


const initialTasks = [
    { 
        task: { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im Anschluss das saubere Geschirr verräumen', points: 3, color: 'red', tip: "Um nachhaltiger Geschirr zu spülen, benutze eine Spülmaschine, wenn sie voll beladen ist. Wenn du von Hand spülst, fülle das Spülbecken mit Wasser, statt unter fließendem Wasser zu spülen, und verwende umweltfreundliches Spülmittel." }, 
        date: '2024-06-15',
        person: initialUsers[0]
    },
    { 
        task: { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "Verwende essig- und natronbasierte Reiniger anstelle von chemischen Reinigungsmitteln und setze wiederverwendbare Reinigungstücher ein." }, 
        date: '2024-07-20',
        person: initialUsers[0]
    },
    { 
        task: { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "Wasche deine Wäsche bei niedrigeren Temperaturen und nutze ökologisches Waschmittel in angemessenen Mengen. Wenn möglich, trockne sie an der Luft statt im Trockner." }, 
        date: '2024-06-25',
        person: initialUsers[1]
    },
    { 
        task: { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Wasche und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "Verwende essig- und natronbasierte Reiniger anstelle von chemischen Reinigungsmitteln und setze wiederverwendbare Reinigungstücher ein." }, 
        date: '2024-06-25',
        person: initialUsers[2]
    },
    { 
        task: { id: 8, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "Wasche deine Wäsche bei niedrigeren Temperaturen und nutze ökologisches Waschmittel in angemessenen Mengen. Wenn möglich, trockne sie an der Luft statt im Trockner." }, 
        date: '2024-06-13', 
        person: initialUsers[0]
    }
];

export function useTasks() {
    const [tasks, setTasks] = useState(initialTasks);

    const completeTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.task.id !== taskId));
    };

    return { tasks, setTasks, completeTask };
}

