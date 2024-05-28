import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './js/registrierung';
import Dashboard from './js/dashboard';
import Calendar from './js/Calendar';
import LogIn from './js/login';
import ToDo from './js/ToDo';
import Liste from './js/liste';
import FetchData from './FetchData'; // Neue Komponente importieren
import './css/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/fetch-data" element={<FetchData />} /> {/* Neue Route hinzufügen */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
