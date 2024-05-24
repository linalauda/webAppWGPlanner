import React, { useState } from 'react';
import { useTasks } from './taskUtils'; // Stellen Sie sicher, dass der Importpfad korrekt ist

function TaskList() {
  const [currentUser, setCurrentUser] = useState('nutzer1'); // Definieren Sie den aktuellen Benutzer in der TaskList-Komponente
  const { tasks } = useTasks();

  const userTasks = tasks.filter(task => task.person === currentUser);

  return (
    <div>
      <h2>Tasks for {currentUser}</h2>
      {userTasks.length > 0 ? (
        <ul>
          {userTasks.map((taskWrapper, index) => (
            <li key={index} style={{ border: `1px solid ${taskWrapper.task.color}`, margin: '10px', padding: '10px' }}>
              <h3>{taskWrapper.task.title}</h3>
              <p>{taskWrapper.task.description}</p>
              <p>Points: {taskWrapper.task.points}</p>
              <p>Date: {taskWrapper.date}</p>
              <p>Tip: {taskWrapper.task.tip}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found for {currentUser}</p>
      )}
    </div>
  );
}

export default TaskList;
