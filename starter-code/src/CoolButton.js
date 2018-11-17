import React from 'react';

const CoolButton = props => (
  <button className={props.className}>{props.children}</button>
);

export default CoolButton;