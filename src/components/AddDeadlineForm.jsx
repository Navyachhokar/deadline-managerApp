// src/components/AddDeadlineForm.jsx
import React, { useState } from 'react';
import '../styles/AddDeadlineForm.css';

function AddDeadlineForm({ onAddDeadline }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      alert('Please fill in the required fields.');
      return;
    }

    const newDeadline = {
      id: Date.now(),
      title,
      description,
      dueDate,
    };

    onAddDeadline(newDeadline);

    // Clear the form
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="deadline-form" onSubmit={handleSubmit}>
      <h2>Add New Deadline</h2>

      <input
        type="text"
        placeholder="Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Deadline</button>
    </form>
  );
}

export default AddDeadlineForm;
