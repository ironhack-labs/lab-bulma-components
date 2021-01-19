import React from 'react';
import 'bulma/css/bulma.css';


const CoolButton = props => {
    let className = 'button ' + props.className;

    return (
     <button className={className}>{props.name}</button>
    );
  };

export default CoolButton;