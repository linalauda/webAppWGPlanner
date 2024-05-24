import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import Registration from './js/registrierung';
import Dashboard from './js/dashboard';
=======
import Aufgaben from './js/Aufgaben';
>>>>>>> Stashed changes
import Calendar from './js/Calendar';
import LogIn from './js/login';
import './css/index.css';

function App() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/calendar" element={<Calendar />} />
=======
        <Route path="/" element={<Calendar />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
