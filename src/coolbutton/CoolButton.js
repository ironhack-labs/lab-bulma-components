import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  return (<div>
      <button className={props.class}>{props.children}</button>

  </div>);
};

export default CoolButton;
