import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Please fill in both title and description');
      return;
    }

    // Create a new task object with title, description, and a unique id
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    // Pass the new task back to App through onAddTask
    onAddTask(newTask);

    // Clear the form inputs
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        rows="3"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
