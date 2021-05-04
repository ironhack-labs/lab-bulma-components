import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  
  const buttonStyles = 
  `button ${props.isPrimary ? 'is-primary' : "" }
  ${props.isSuccess ? 'is-success' : "" }
  ${props.isDanger ? 'is-danger' : "" }`;
  
  return <button className={buttonStyles}>{props.children}</button>
};

export default CoolButton;