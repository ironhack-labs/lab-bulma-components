import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = ({ color, label }) => {
  const handleColor = (chosenColor) => {
    let colorVariant = '';
    return chosenColor ? (colorVariant = `is-${chosenColor}`) : '';
  };

  return <button className={`button ${handleColor(color)}`}>{label}</button>;
};

export default CoolButton;
