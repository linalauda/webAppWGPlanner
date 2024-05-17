import React from 'react';

const ScrollableSelect = ({ label, value, options, onChange }) => {
  const handleIncrement = () => {
    const currentIndex = options.indexOf(value);
    const nextIndex = (currentIndex + 1) % options.length;
    onChange(options[nextIndex]);
  };

  const handleDecrement = () => {
    const currentIndex = options.indexOf(value);
    const prevIndex = (currentIndex - 1 + options.length) % options.length;
    onChange(options[prevIndex]);
  };

  return (
    <div className="scrollable-select">
      <button type="button" onClick={handleIncrement}>▲</button>
      <div className="value">{value}</div>
      <button type="button" onClick={handleDecrement}>▼</button>
      <label>{label}</label>
    </div>
  );
};

export default ScrollableSelect;
