import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Правильный импорт
import Header from '../Header/Header';
import Home from '../Home/Home';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import Clients from '../Clients/Clients';
import './App.css';

function App() {
  // Состояние для отслеживания того, залогинен ли пользователь
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate(); // Создаём функцию navigate для навигации

  // Проверка авторизации пользователя при загрузке страницы
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []); // Эффект выполняется один раз при монтировании компонента

  // Функция для обработки успешной регистрации
  const handleRegister = () => {
    console.log("User registered");
    navigate('/login'); // После регистрации перенаправляем на страницу логина
  };

  // Функция для обработки успешного логина
  const handleLogin = () => {
    console.log("User logged in");
    setIsLoggedIn(true); // Устанавливаем состояние залогиненности
    localStorage.setItem('isLoggedIn', 'true'); // Сохраняем информацию в localStorage
    navigate('/dashboard'); // Перенаправляем на страницу клиентов после логина
  };

  // Функция для обработки выхода из системы
  const handleLogout = () => {
    console.log("User logged out");
    setIsLoggedIn(false); // Убираем залогиненность
    localStorage.setItem('isLoggedIn', 'false'); // Обновляем localStorage
    navigate('/login'); // Перенаправляем на страницу логина
  };

  return (
    <div className="app-container">
      <Header onLogout={handleLogout} /> {/* Header теперь может иметь кнопку выхода */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          {isLoggedIn && <Route path="/clients" element={<Clients />} />}
        </Routes>
      </div>
    </div>
  );
}

// Оборачиваем в <Router> вне компонента
export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
