// src/App.jsx
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import DeadlineFilter from './components/DeadlineFilter';
import Header from './components/Header';
import AddDeadlineForm from './components/AddDeadlineForm';
import DeadlineList from './components/DeadlineList';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [deadlines, setDeadlines] = useState([]);
  const [filter, setFilter] = useState('all');
  


  // 🔹 Load from localStorage when app mounts
  useEffect(() => {
  const stored = localStorage.getItem('deadlines');
  if (stored) {
    const parsed = JSON.parse(stored);
    // Ensure each item has a 'completed' field
    const updated = parsed.map((d) => ({
      ...d,
      completed: d.completed || false
    }));
    setDeadlines(updated);
  }
}, []);


  // 🔹 Save to localStorage when deadlines change
  useEffect(() => {
    localStorage.setItem('deadlines', JSON.stringify(deadlines));
  }, [deadlines]);

  const handleAddDeadline = (newDeadline) => {
    setDeadlines([newDeadline, ...deadlines]);
  };

  const handleDeleteDeadline = (id) => {
    const updated = deadlines.filter((item) => item.id !== id);
    setDeadlines(updated);
  };

  // src/App.jsx (add this inside the App component)
  const handleToggleComplete = (id) => {
  const updated = deadlines.map((item) =>
    item.id === id ? { ...item, completed: !item.completed } : item
  );
  setDeadlines(updated);
 };

  const getFilteredDeadlines = () => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  switch (filter) {
    case 'today':
      return deadlines.filter(d => d.dueDate === today && !d.completed);
    case 'upcoming':
      return deadlines.filter(d => d.dueDate > today && !d.completed);
    case 'completed':
      return deadlines.filter(d => d.completed);
    default:
      return deadlines;
  }
};

  return (
    
<div className="app-container" data-theme={darkMode ? 'dark' : 'light'}>

  {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
     <div className="form-section">
       <Header darkMode={darkMode} setDarkMode={setDarkMode} />

    <AddDeadlineForm onAddDeadline={handleAddDeadline} />
     </div>
  {/* Layout wrapper */}
    
    <div className="list-section">
      <DeadlineFilter filter={filter} setFilter={setFilter} />
      <DeadlineList
        deadlines={getFilteredDeadlines()}
        onDeleteDeadline={handleDeleteDeadline}
        onToggleComplete={handleToggleComplete}
      />
    </div>
</div>


  );
}

export default App;
