import React from 'react';

const CoolButton = ({ name, styles }) => {
  let buttonStyles = '';
  styles.forEach((style) => {
    buttonStyles += `${style} `;
  });
  return (
    <button className={`button is-medium my-class ${buttonStyles}`}>{name}</button>
  );
};

export default CoolButton;
