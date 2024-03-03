import React from 'react';
import './App.css';
import './Navbar.css';

function App() {
  const cardContent = (
    <div>
      <p>Hi I am Tyler Ashmore</p>
    </div>
  )
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800365874</p>
      <p>Hi I am Tyler Ashmore</p>
      
      <div className="card-container">
        <Card title="Card 01" content={cardContent} />
        <Card title="Card 02" content={cardContent} />
        <Card title="Card 03" content={cardContent} />
      </div>
    </div>
  );
}

export default App;