import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleTaskCompletion, editTask, loadTasks } from './redux/todoSlice';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  // Load tasks from localStorage and dispatch them to Redux store when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (Array.isArray(storedTasks)) {
      dispatch(loadTasks(storedTasks)); // Dispatch tasks to Redux store
    }
  }, [dispatch]);

  // Save tasks to localStorage whenever the tasks change in Redux store
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Dispatch the add task action
  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  // Dispatch the delete task action
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  // Dispatch the toggle task completion action
  const handleToggleTaskCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  // Dispatch the edit task action to update task details
  const handleEditTask = (id, updatedTask) => {
    dispatch(editTask({ id, updatedTask }));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTaskCompletion}
        onEdit={handleEditTask}
      />
    </div>
  );
}

export default App;
