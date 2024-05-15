import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aufgaben from './js/Aufgaben';
import DetailView from './js/DetailView';
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
        <Route path="/" element={<Calendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
