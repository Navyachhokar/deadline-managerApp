// src/components/DeadlineList.jsx
import React from 'react';
import DeadlineItem from './DeadlineItem';
import '../styles/DeadlineList.css';

function DeadlineList({ deadlines, onDeleteDeadline, onToggleComplete }) {
  if (deadlines.length === 0) {
    return <p className="empty-msg">No deadlines added yet.</p>;
  }

  // 🔽 Sort by due date (ascending)
  const sortedDeadlines = [...deadlines].sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return (
    <div className="deadline-list">
      {sortedDeadlines.map((deadline) => (
        <DeadlineItem
          key={deadline.id}
          deadline={deadline}
          onDelete={onDeleteDeadline}
          onToggleComplete={onToggleComplete}
        />

      ))}
    </div>
  );
}

export default DeadlineList;
