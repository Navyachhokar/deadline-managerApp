// src/components/DeadlineItem.jsx
import React from 'react';
import '../styles/DeadlineItem.css';

function DeadlineItem({ deadline, onDelete, onToggleComplete }) {
  const { id, title, description, dueDate, completed } = deadline;

  return (
        <div className={`deadline-item ${deadline.completed ? 'completed' : ''}`}>
        <div className="item-info">
        <h3>
          <input
            type="checkbox"
            checked={deadline.completed}
            onChange={() => onToggleComplete(deadline.id)}
          />
          <span className="title-text">{deadline.title}</span>
        </h3>
        {deadline.description && <p>{deadline.description}</p>}
        <p className="due-date">Due: {deadline.dueDate}</p>
      </div>
      <button onClick={() => onDelete(deadline.id)}>Remove</button>
    </div>

  );
}

export default DeadlineItem;
