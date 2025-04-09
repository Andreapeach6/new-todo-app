import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleSave = () => {
    onEdit(task.id, updatedDescription);
    setIsEditing(false); // Stop editing
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <div
          className={`task-text ${task.completed ? 'completed' : ''}`}
          onClick={() => onToggle(task.id)}
        >
          {task.title}
        </div>

        {isEditing ? (
          <div>
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              className="task-description-edit"
            />
            <button className="save-btn" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className="task-description">{task.description}</div>
        )}
      </div>

      <div className="task-actions">
        <button className="mark-completed-btn" onClick={() => onToggle(task.id)}>
          {task.completed ? 'Unmark' : 'Mark Completed'}
        </button>
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
