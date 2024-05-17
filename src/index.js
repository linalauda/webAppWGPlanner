import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './js/registrierung';
import Dashboard from './js/dashboard';
import Calendar from './js/Calendar';
import './css/index.css';

function App() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
