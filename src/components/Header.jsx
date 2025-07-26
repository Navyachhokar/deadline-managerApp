import React from 'react';
import '../styles/App.css';

const Header = ({ darkMode, setDarkMode }) => {

  return (
    <header className="header">
      <h1>📅 Deadline Manager</h1>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode) }
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;
