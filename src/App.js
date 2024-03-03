import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import './App.css';
import './Navbar.css';

function App() {
  const cardContent = (
    <div>
      <h2>CS 230L</h2>
      <h3>Section - 001</h3>
      <p>WVU ID: 800365874</p>
      <p>Hi I am Tyler Ashmore</p>
    </div>
  );

  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <Card title="Card 01" content={cardContent} />
        <Card title="Card 02" content={cardContent} />
        <Card title="Card 03" content={cardContent} />
      </div>
    </div>
  );
}

export default App;