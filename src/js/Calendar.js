import React, { useState, useEffect } from 'react';
import '../css/calendar.css';
import Logo from '../Logo.png';
import { Link } from 'react-router-dom';
import Aufgaben from './Aufgaben';

function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [calendarDays, setCalendarDays] = useState([]);
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
      currentWeek.push(date);
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
          {calendarDays.map((week, index) => (
            <div key={index} className="calendar-week">
              {week.map((day, dayIndex) => (
                <div key={dayIndex} className={`calendar-day ${day === null ? 'empty' : ''}`}>{day}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div id= "aufgaben">
      {<Aufgaben />}
      </div>
    </div>
  );
}

export default Calendar;
