import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import your CSS if you have any

// Make sure the 'root' ID matches the ID in your index.html
const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Target container is not a DOM element. Ensure the root element exists.');
}
