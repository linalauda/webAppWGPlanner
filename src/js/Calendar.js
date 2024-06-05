import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/calendar.css';
import Logo from '../Logo.png';
import User from '../user.png';
import Logout from '../log-out.png';
import Tip from '../Idee.png';
import Aufgaben from './Aufgaben'; 
import axios from 'axios';

function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayTasks, setSelectedDayTasks] = useState([]);
  const [tasks, setTasksData] = useState([]); 

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  useEffect(() => {
    createCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  useEffect(() => {
    fetchTasks(); // Aufgaben beim Laden der Komponente abrufen
  }, []);


  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/tasks/?skip=3&limit=100');
      const tasks = response.data;
      // Setze die Aufgaben und aktualisiere den Kalender
      createCalendar(currentYear, currentMonth, tasks);
    } catch (error) {
      console.error('Fehler beim Laden der Aufgaben:', error);
    }
  };

  const setTasks = (newTasks) => {
    // Setze die Aufgaben und aktualisiere den Kalender
    createCalendar(currentYear, currentMonth, newTasks);
  };
  
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

  function showTaskTip(taskId) {
    // Implementierung der Funktion
    console.log('Showing task tip for task with ID:', taskId);
  }
  
  return (
    <div className="hintergrund">
       <Link to="/dashboard">
      <img src={Logo} alt="Logo" id="logo-image"/>
      </Link>
      <h1 id="slogan">"plan today, change tomorrow!"</h1>
      <Link to="/user-profile">
      <div className="flex-container-user2">
          <div className="flexbox-grauerKreis2">
            <img src={User} alt="User" className="flex-item-user-image" />
          </div>
          </div>
          </Link>
          <div className="outer-flex-container">
          <h3 className="h2">Alles auf einen Blick!</h3>
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
              <h3 style={{fontWeight: 'bold', fontSize: '60px',margin:'10px'}}>{selectedDay}</h3>
              <p style={{fontWeight: 'bold', fontSize: '20px', margin:'20px'}}>Anstehende Aufgaben:</p>
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
            </div>
          </div>
        </div>
      )}
      {/* Andere Modal-Elemente hier ... */}
      <div id="aufgaben">
        <Aufgaben /> 
      </div>
      <Link to="/logout">
            <img src={Logout} alt="Logout" className="logout-image"/>
          </Link>
    </div>
    </div>
  );
}

export default Calendar;