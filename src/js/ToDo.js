import React, { useState } from 'react';
import { useTasks } from './taskUtils'; // Ensure the import path is correct

function TaskList() {
  const [currentUser, setCurrentUser] = useState('nutzer1'); // Define the current user in the TaskList component
  const { tasks, completeTask } = useTasks(); // Include completeTask function

  const userTasks = tasks.filter(task => task.person === currentUser);

  const handleCompleteTask = (taskId) => {
    completeTask(taskId); // Mark the task as completed
  };

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
              <label>
                <input 
                  type="checkbox" 
                  onChange={() => handleCompleteTask(taskWrapper.task.id)} 
                />
                Complete
              </label>
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
