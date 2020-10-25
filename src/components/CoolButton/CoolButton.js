import React from 'react';

import './CoolButton.css';

import mountClass from '../../utils/mountClass';

const CoolButton = (props) => {
  return <button className={`button ${mountClass(props)}`}>{props.children}</button>;
};

export default CoolButton;
