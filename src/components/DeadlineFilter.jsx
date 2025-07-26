// src/components/DeadlineFilter.jsx
import React from 'react';
import '../styles/DeadlineFilter.css';

function DeadlineFilter({ filter, setFilter }) {
  const filters = ['all', 'today', 'upcoming', 'completed'];

  return (
    <div className="filter-buttons">
      {filters.map((f) => (
        <button
          key={f}
          className={filter === f ? 'active' : ''}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default DeadlineFilter;
