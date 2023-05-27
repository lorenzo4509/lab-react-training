import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < Math.round(rating) ? 'filled' : ''}>
              ★
            </span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
