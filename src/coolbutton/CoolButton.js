import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';


const CoolButton = (props) => {
  return (
    <button className={`button ${props.className} 
    ${props.isSuccess ? "is-success" : ""}`}>
          {props.children}
    </button>
    
  );
};

export default CoolButton;