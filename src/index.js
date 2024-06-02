import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './js/registrierung';
import Dashboard from './js/dashboard';
import Calendar from './js/Calendar';
import LogIn from './js/login';
import LogOut from './js/logout';
import ToDo from './js/ToDo';
import Liste from './js/liste';
import WGProfile from './js/wg-profile';
import UserProfile from './js/user-profile';
import Einstellungen from './js/settings';
import Ranking from './js/ranking';
import BurgerMenu from './components/burgermenu';
import BurgerMenuLayout from './components/burgermenu-layout';
import FetchData from './FetchData'; // Neue Komponente importieren
import './css/index.css';

function App() {
  return (
    <BrowserRouter>
    <BurgerMenuLayout>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/wg-profile" element={<WGProfile />} />
        <Route path="/settings" element={<Einstellungen />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/fetch-data" element={<FetchData />} /> {/* Neue Route hinzufügen */}
      </Routes>
    </BurgerMenuLayout>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
