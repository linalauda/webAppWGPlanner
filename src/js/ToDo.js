import React, { useState } from 'react';
import { useTasks } from './taskUtils'; // Ensure the import path is correct
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import User from '../user.png';
import Logout from '../log-out.png';
import axios from 'axios';
import '../css/todo.css';

function TaskList() {
  const [currentUser, setCurrentUser] = useState('nutzer1'); // Define the current user in the TaskList component
  const { tasks, completeTask } = useTasks(); // Include completeTask function

  const userTasks = tasks.filter(task => task.person === currentUser);

  const handleCompleteTask = (taskId) => {
    completeTask(taskId); // Mark the task as completed
  };

  return (
    <div class="hintergrund">
       <Link to="/dashboard">
        <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
      <div class="outer-flex-container">
      <h2 className="h3">Deine grüne Bucket-List {currentUser}</h2>
        <div class="flexcontainer-todos">
      {userTasks.length > 0 ? (
        <ul>
          {userTasks.map((taskWrapper, index) => (
            <li key={index} style={{ border: `5px solid ${taskWrapper.task.color}`, margin: '30px', padding: '10px' }}>
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
      <footer>
          <h1 className="slogan">"plan today, change tomorrow!"</h1>
          <Link to="/logout">
            <img src={Logout} alt="Logout" className="logout-image"/>
          </Link>
      </footer>
      </div>
      </div>
    </div>
  )
}

export default TaskList;
