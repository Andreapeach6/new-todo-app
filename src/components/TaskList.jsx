import React, { useState } from 'react';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleEditClick = (task) => {
    setIsEditing(task.id);
    setNewTitle(task.title); // Set current title
    setNewDescription(task.description); // Set current description
  };

  const handleSaveEdit = (taskId) => {
    // Save the new title and description
    const updatedTask = { title: newTitle, description: newDescription };
    onEdit(taskId, updatedTask);  // Dispatch the edit task action
    setIsEditing(null);  // Exit edit mode
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <div className="task-content">
            {isEditing === task.id ? (
              <div>
                {/* Editing Task Title */}
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Task Title"
                  className="edit-input"
                />
                {/* Editing Task Description */}
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Task Description"
                  className="edit-input"
                  rows="3"
                />
                <button onClick={() => handleSaveEdit(task.id)} className="save-edit-btn">
                  Save
                </button>
              </div>
            ) : (
              <>
                {/* Display Task Title */}
                <span
                  className={`task-text ${task.completed ? 'completed' : ''}`}
                  onClick={() => onToggle(task.id)}  // Toggle completion
                >
                  {task.title}
                </span>
                {/* Display Task Description */}
                {task.description && <p className="task-description">{task.description}</p>}
              </>
            )}
          </div>

          <div className="task-actions">
            <button
              className="mark-completed-btn"
              onClick={() => onToggle(task.id)} // Toggle completion status
            >
              {task.completed ? 'Undo' : 'Mark Completed'}
            </button>
            <button
              className="edit-btn"
              onClick={() => handleEditClick(task)} // Trigger edit mode
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(task.id)} // Delete task
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
