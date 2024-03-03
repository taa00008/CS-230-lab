import React from 'react';
import './App.css';
import Navbar from "./Navbar.js";
import Card from './Card.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>CS 230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800365874</p>
      <p>Hi I am Tyler Ashmore</p>
      
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;