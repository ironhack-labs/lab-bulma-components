import React from 'react';

function CoolButton(props) {  
  return <button className={props.className}>{props.children}</button>;
}

export default CoolButton;
