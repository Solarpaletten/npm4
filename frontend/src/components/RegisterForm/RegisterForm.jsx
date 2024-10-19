import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая валидация
    if (!username || !email || !password) {
      setError('All fields are required!');
      return;
    }

    // Логика регистрации (например, отправка данных на сервер)
    console.log('User registered:', { username, email, password });

    // Очистка формы
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');

    // Вызываем функцию onRegister и перенаправляем на страницу логина
    if (onRegister) {
      onRegister();
    } else {
      navigate('/login'); // Перенаправляем на страницу логина
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Register
        </button>
        {/* Кнопка Домой */}
        <button
          type="button"
          style={{ marginLeft: '10px', padding: '10px 20px', marginTop: '10px' }}
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
