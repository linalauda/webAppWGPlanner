import React, { useState } from 'react';

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
    <div>
      <h2>Einkaufsliste</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Neuer Eintrag"
      />
      <button onClick={addItem}>Hinzufügen</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleChecked(index)}
            />
            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.name}
            </span>
            <button onClick={() => removeItem(index)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
