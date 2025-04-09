import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload); // Add new task
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); // Remove task by id
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; // Toggle task completion
      }
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task && updatedTask) {
        task.title = updatedTask.title; // Update task title
        task.description = updatedTask.description; // Update task description
      }
    },
    loadTasks: (state, action) => {
      state.tasks = action.payload; // Load tasks from localStorage
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, editTask, loadTasks } = todoSlice.actions;

export default todoSlice.reducer;
