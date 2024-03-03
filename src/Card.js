import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Card 01</div>
        <div className="card-body">
          <p className="card-text">this is card 01</p>
        </div>
      </div>

      <div className="card text-bg-danger p-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Card 02</div>
        <div className="card-body">
          <p className="card-text">this is card 02</p>
        </div>
      </div>

      <div className="card text-bg-success p-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Card 03</div>
        <div className="card-body">
          <p className="card-text">this is card 03</p>
        </div>
      </div>
    </div>
  );
};

export default Card;