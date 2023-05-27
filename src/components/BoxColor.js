import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    marginBottom: '10px',
  };

  const rgbValue = `rgb(${r}, ${g}, ${b})`;
  const hexValue = rgbToHex(r, g, b);

  function rgbToHex(r, g, b) {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const hexR = componentToHex(r);
    const hexG = componentToHex(g);
    const hexB = componentToHex(b);

    return `#${hexR}${hexG}${hexB}`;
  }

  return (
    <div className="box-color" style={boxStyle}>
      <div>
        <span>RGB: {rgbValue}</span>
        <br />
        <span>Hex: {hexValue}</span>
      </div>
    </div>
  );
}

export default BoxColor;
