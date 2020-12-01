import React from 'react';
import 'bulma/css/bulma.css';
import { bulmaClasses } from '../helpers';

const CoolButton = (props) => {
  const buttonClasses = ['button']; 

  for (let keys in props) {
    if (bulmaClasses[keys]) {
      buttonClasses.push(bulmaClasses[keys])
    }
  }

  return (
    <button className={buttonClasses.join(' ')}>
      {props.children}
    </button>
  )
}

export default CoolButton;
