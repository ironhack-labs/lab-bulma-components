import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';



const CoolButton = (props) => {
    const classNameString = `
    button ${props.isSmall ? 'is-small' : ''} ${props.isDanger ? 'is-danger' : ''} ${props.isSuccess ? 'is-success' : ''} ${props.isPrimary ? 'is-primary' : ''}
    `
    
    return (
        <button type="submit" className={classNameString}>{props.text}</button>
    );
  };

export default CoolButton;