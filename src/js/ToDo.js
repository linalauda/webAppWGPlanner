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
    <div className="hintergrund">
       <Link to="/dashboard">
        <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
        <div className="flex-container-user2">
          <div className="flexbox-grauerKreis2">
            <img src={User} alt="User" className="flex-item-user-image" />
          </div>
          </div>
      <div className="outer-flex-container">
        <h2 className="h2">Deine grüne Bucket-List {currentUser}</h2>
        <div className="scrollable-container">
          {userTasks.length > 0 ? (
            <ul className="task-list">
              {userTasks.map((taskWrapper, index) => (
                <li key={index} style={{ border: `5px solid ${taskWrapper.task.color}`, margin: '40px', padding: '20px', borderRadius:'25px'  }}>
                  <h3>{taskWrapper.task.title}</h3>
                  <p>{taskWrapper.task.description}</p>
                  <p style={{ fontWeight: 'bold' }}>Punkte: {taskWrapper.task.points}</p>
                  <p style={{ fontWeight: 'bold' }}>Datum: {taskWrapper.date}</p>
                  <p style={{ fontWeight: 'bold' }}>Dein Ratschlag: {taskWrapper.task.tip}</p>
                  <label>
                    <input 
                      type="checkbox" 
                      onChange={() => handleCompleteTask(taskWrapper.task.id)} 
                    />
                    Erledigt
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p class="Text-keineAufgaben">Hier könnten Deine To Do's stehen {currentUser}</p>
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
  );
}

export default TaskList;
