import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './js/registrierung';
import Dashboard from './js/dashboard';
import Calendar from './js/Calendar';
import LogIn from './js/login';
import ToDo from './js/ToDo';
import Liste from './js/liste';
import Ranking from './js/ranking';
import WGProfile from './js/wg-profile';
import UserProfile from './js/user-profile';
import Settings from './js/settings';
import BurgerMenu from './components/burgermenu';
import './css/index.css';

function App() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <BrowserRouter>
     <div>
        <BurgerMenu />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/wg-profile" element={<WGProfile />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
