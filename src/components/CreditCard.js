import React from 'react';

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardType = type === 'Visa' ? 'visa.png' : 'master-card.svg';
  const lastFourDigits = number.slice(-4);

  return (
    <div className="credit-card" style={cardStyle}>
      <img className="card-type" src={`/img/${cardType}`} alt={type} />
      <div className="card-number">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index}>{'●●●●'}</span>
        ))}
        <span>{lastFourDigits}</span>
      </div>
      <div className="card-info">
        <span>Expires {expirationMonth}/{expirationYear}</span>
        <span>{bank}</span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
