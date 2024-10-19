import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals'; // Импорт функции

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Вызов функции для сбора метрик
reportWebVitals(console.log); // Вы можете передать свою функцию для обработки метрик
