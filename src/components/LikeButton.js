import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleLike = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={handleLike}>
      {likes} Likes
    </button>
  );
}

export default LikeButton;
