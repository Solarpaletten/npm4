import React from 'react';
import './App.css';  // Import styles
import Sidebar from './Sidebar';  // Import the sidebar

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="main-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area where relevant information will be displayed based on your selections in the sidebar.</p>
      </div>
    </div>
  );
}

export default App;
