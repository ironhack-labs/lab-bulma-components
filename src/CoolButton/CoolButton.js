import React, { Fragment } from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';

export default function CoolButton(props) {
  const classNameString = `
      button ${props.isSmall ? 'is-small' : ''} 
      ${props.isSuccess ? 'is-success' : ''} 
      ${props.isDanger ? 'is-danger' : ''} 
      ${props.isPrimary ? 'is-primary' : ''}
      ${props.className}
    `;
  return <button className={classNameString}>{props.children}</button>;
}
