import React from 'react';

function Rating(props) {
  const { children } = props;
  const roundedRating = Math.round(children);

  const stars = ['☆', '☆', '☆', '☆', '☆'];

  for (let i = 0; i < roundedRating; i++) {
    stars[i] = '★';
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;
