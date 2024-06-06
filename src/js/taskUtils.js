import { useState } from 'react';

// Initial list of tasks
const initialTasks = [
    { 
        task: { id: 1, title: 'Geschirr spülen', description: 'Dreckiges Geschirr mit der Hand waschen oder, falls vorhanden, den Geschirrspüler anstellen und im Anschluss das saubere Geschirr verräumen', points: 3, color: 'red', tip: "tipp" }, 
        date: '2024-06-15',
        person: 'nutzer1'
    },
    { 
        task: { id: 2, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Waschbecken und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "tipp" }, 
        date: '2024-07-20',
        person: 'nutzer1'
    },
    { 
        task: { id: 3, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "tipp" }, 
        date: '2024-06-25',
        person: 'nutzer2'
    },
    { 
        task: { id: 4, title: 'Badezimmer reinigen', description: 'Oberflächen reinigen. Toilette, Waschbecken und Dusche/Badewanne gründlich reinigen', points: 3, color: 'green', tip: "tipp" }, 
        date: '2024-06-25',
        person: 'nutzer3'
    },
    { 
        task: { id: 5, title: 'Wäsche waschen', description: 'Wäsche in die Waschmaschine räumen, Waschmaschine anstellen und im Anschluss die saubere Wäsche aufhängen oder in den Trockner verräumen', points: 2, color: 'navy', tip: "tipp" }, 
        date: '2024-06-13', 
        person: 'nutzer1'
    }
];

// Custom hook to manage tasks
export function useTasks() {
    const [tasks, setTasks] = useState(initialTasks);

    // Function to mark a task as completed and remove it
    const completeTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.task.id !== taskId));
    };

    return { tasks, setTasks, completeTask };
}

// Function to add a new task
export function addTask(newTask, setTasks) {
    setTasks(prevTasks => [...prevTasks, newTask]);
}
