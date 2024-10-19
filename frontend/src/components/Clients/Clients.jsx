import React, { useState, useEffect } from 'react';

import './Clients.css';  // Подключаем стили для компонента



function Clients() {
  const [clients, setClients] = useState([]);  // Состояние для хранения данных клиентов
  const [loading, setLoading] = useState(true);  // Состояние для отображения загрузки
  const [error, setError] = useState(null);  // Состояние для отображения ошибок

  useEffect(() => {
    // Запрос к API для получения данных клиентов
    fetch('http://localhost:3001/api/clients')  // URL API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setClients(data);  // Устанавливаем полученные данные в состояние
        setLoading(false);  // Останавливаем загрузку
      })
      .catch(error => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading clients...</p>;
  }

  if (error) {
    return <p>Error loading clients: {error}</p>;
  }

  return (
    <div>
      <h1>Clients List</h1>
      <table>
        <thead>
          <tr>
            <th>Registration Date</th>
            <th>Name</th>
            <th>Code</th>
            <th>VAT Code</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.registrationDate}</td>
              <td>{client.name}</td>
              <td>{client.code}</td>
              <td>{client.vatCode}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
