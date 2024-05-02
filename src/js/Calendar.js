import React, { useState, useEffect } from 'react';

function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [calendarDays, setCalendarDays] = useState([]);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    createCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  function createCalendar(year = new Date().getFullYear(), month = new Date().getMonth()) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstDayOfWeek = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1; // Anpassung für Montag als ersten Wochentag
    const newCalendarDays = [];

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfWeek) {
          week.push(null);
        } else if (date > daysInMonth) {
          break;
        } else {
          week.push(date);
          date++;
        }
      }
      newCalendarDays.push(week);
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
    <div className="calendar">
      <h2 id="month-year">{months[currentMonth]} {currentYear}</h2>
      <button onClick={previousMonth}>Previous Month</button>
      <button onClick={nextMonth}>Next Month</button>
      <table id="calendar-body">
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {/* Hier können Sie die Tage des Kalenders einfügen */}
          {/* Beachten Sie, dass Sie die calendarDays-Variable verwenden können, um die Tage zu generieren */}
          {/* Zum Beispiel: */}
          {calendarDays.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
