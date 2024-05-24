import React, { useState, useEffect } from 'react';
import '../css/calendar.css';
import Logo from '../Logo.png';
import Tip from '../Idee.png';
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes
import Aufgaben from './Aufgaben';
import { useTasks } from './taskUtils'; 

function Calendar() {
  const { tasks } = useTasks(); 

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayTasks, setSelectedDayTasks] = useState([]);
  const [selectedTaskTip, setSelectedTaskTip] = useState(null);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  useEffect(() => {
    createCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  function createCalendar(year = new Date().getFullYear(), month = new Date().getMonth()) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstDayOfWeek = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
    const newCalendarDays = [];
  
    let date = 1;
    let currentWeek = [];
  
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }
  
    for (let i = 0; i < daysInMonth; i++) {
      const tasksForDay = tasks.filter(task => {
        const taskDate = new Date(task.date);
        return taskDate.getFullYear() === year &&
               taskDate.getMonth() === month &&
               taskDate.getDate() === date;
      });
      
      currentWeek.push({ day: date, tasks: tasksForDay });
      if (currentWeek.length === 7 || date === daysInMonth) {
        newCalendarDays.push(currentWeek);
        currentWeek = [];
      }
      date++;
    }
  
    setCalendarDays(newCalendarDays);
  }
  
  function previousMonth() {
    setCurrentMonth(prevMonth => {
      let newMonth = prevMonth - 1;
      let newYear = currentYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear = currentYear - 1;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  }

  function nextMonth() {
    setCurrentMonth(prevMonth => {
      let newMonth = prevMonth + 1;
      let newYear = currentYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear = currentYear + 1;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  }

  useEffect(() => {
    if (selectedDay !== null) {
      const tasksForSelectedDay = tasks.filter(task => {
        const taskDate = new Date(task.date);
        const taskPerson = new String(task.person);
        return taskDate.getFullYear() === currentYear &&
               taskDate.getMonth() === currentMonth &&
               taskDate.getDate() === selectedDay;
      });
      setSelectedDayTasks(tasksForSelectedDay);
    }
  }, [selectedDay, tasks, currentYear, currentMonth]);

  const showTaskTip = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    if (task && task.tip) {
      setSelectedTaskTip(task.tip);
    }
  };

  return (
    <div className="hintergrund">
      <img src={Logo} alt="Logo" id="logo-image"/>
      <h1 id="slogan">"plan today, change tomorrow!"</h1>
      <div className="calendar">
        <div className="calendar-header">
          <h2 id="month-year">
            <button className="arrow-button" onClick={previousMonth}>{'<'}</button>
            {months[currentMonth]} {currentYear}
            <button className="arrow-button" onClick={nextMonth}>{'>'}</button>
          </h2>
        </div>
        <div id="all-weeks">
          <div className="weekdays">
            {weekdays.map((weekday, index) => (
              <div key={index} className="weekday">{weekday}</div>
            ))}
          </div>
          {calendarDays.map((week, weekIndex) => (
            <div key={weekIndex} className="calendar-week">
              {week.map((day, dayIndex) => {
                const taskColor = day && day.tasks.length > 0 ? '#1c6e2f' : ''; // Setze die Farbe basierend auf der Anzahl der Aufgaben

                return (
                  <button
                    key={dayIndex}
                    className={`calendar-day ${!day ? 'empty' : ''}`}
                    style={{ borderLeftColor: taskColor, borderLeftWidth: day && day.tasks.length > 0 ? '5px' : '0px' }} // Ändere die Linienstärke und -farbe basierend auf der Anzahl der Aufgaben
                    onClick={() => setSelectedDay(day ? day.day : null)}
                  >
                    {day && (
                      <div className="day-text">{day.day}</div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {selectedDay && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedDay(null)}>&times;</span>
<<<<<<< Updated upstream
              <h3 style={{fontWeight: 'bold', fontSize: '40px'}}>{selectedDay}</h3>
              <p style={{fontWeight: 'bold'}}>Anstehende Aufgaben:</p>
              <table> {/* Tabelle für Aufgaben und Buttons */}
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody >
                  {selectedDayTasks.map((task, index) => (
                    <tr key={index}>
                
                      <td className="spalte"><span style={{ color: task.task.color }}>&#8212; </span>{task.task.title}</td>
                      <td className="spalte">{task.person}</td>
                      <td className="spalte">
                        <button className="tip-button" onClick={() => showTaskTip(task.id)}>
                          <img src={Tip} alt="Tip" id="tip-image"/>
                        </button>
                      </td>
                      <td></td>
                      <td className="spalte"><button className="edit-button">Ändern</button></td>
                      <td className="spalte"><button className="delete-button">Löschen</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
=======
              <h3 style={{ fontWeight: 'bold', fontSize: 100 }}>{selectedDay}</h3>
              <p style={{fontWeight: 'bold'}}>Anstehende Aufgaben:</p>
              <ul id= "task-list">
                {selectedDayTasks.map((task, index) => (
                  <li key={index}>
                    <span style={{ color: task.task.color }}>&#8212; </span>{task.task.title}
                    <button className="tip-button" onClick={() => showTaskTip(task.id)}><img src={Tip} alt="Tip" id="tip-image"/></button>
                    <button className="edit-button">Ändern</button>
                    <button className="delete-button">Löschen</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {selectedTaskTip && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedTaskTip(null)}>&times;</span>
              <h3>Tipp für die Aufgabe</h3>
              <p>{selectedTaskTip}</p>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      )}
      {/* Andere Modal-Elemente hier ... */}
      <div id="aufgaben">
        <Aufgaben /> 
      </div>
    </div>
  );
}

export default Calendar;