import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import Logout from '../log-out.png';
import User from '../user.png';
import '../css/liste.css';

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem.trim(), checked: false }]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const toggleChecked = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  return (
    <div className="hintergrund">
      <Link to="/dashboard">
        <img src={Logo} alt="Logo" className="logo-image" />
      </Link>
      <Link to="/user-profile">
      <div className="flex-container-user2">
          <div className="flexbox-grauerKreis2">
            <img src={User} alt="User" className="flex-item-user-image" />
          </div>
          </div>
          </Link>
      <div className="outer-flex-container">
        <h2 className="h2">Dein Freund und Helfer</h2>
        <div className="flexcontainer-liste">
          <div>
            <h2>Einkaufsliste</h2>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Neuer Eintrag"
              className="button-Eintrag"
            />
            <button onClick={addItem} className="button-Hinzufügen">Hinzufügen</button>
            <ul className="item-list">
              {items.map((item, index) => (
                <li key={index} className="item-entry">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleChecked(index)}
                  />
                  <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                    {item.name}
                  </span>
                  <button onClick={() => removeItem(index)} className="button-Löschen">Löschen</button>
                </li>
              ))}
            </ul>
          </div>
          <footer>
            <h1 className="slogan">"plan today, change tomorrow!"</h1>
            <Link to="/logout">
              <img src={Logout} alt="Logout" className="logout-image" />
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
