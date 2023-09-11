// src/Circle.js
import React from 'react';

const Circle = ({ x, y }) => {
  const circleStyle = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '12px solid blue',
    left: `${x - 50}px`,
    top: `${y - 120}px`,
  };

  return <div style={circleStyle}></div>;
};

export default Circle;
