// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // For React 18
import { Provider } from 'react-redux'; // For Redux
import { store } from './redux/store'; // Import your Redux store
import App from './App'; // Import your App component
import './index.css'; // Import global styles (if any)

const root = createRoot(document.getElementById('root')); // Create a root element

root.render(
  <Provider store={store}>  {/* Wrap the App with Redux Provider */}
    <App />  {/* Your main app component */}
  </Provider>
);
