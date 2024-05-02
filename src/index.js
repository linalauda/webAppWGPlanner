import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownMenu from './js/DropdownMenu';
import DetailView from './js/DetailView';
import Calendar from './js/Calendar';

function App() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DropdownMenu onItemClick={handleItemClick} />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
