import logo from './logo.svg';
import './App.css';
import './Navbar.js';
import './Card.js';

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
      <Card title="Card 01" content={cardContent} />
    </div>
  );
}

export default App;
