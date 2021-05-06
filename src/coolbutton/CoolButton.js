import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {

    const buttonStyles = `button 
    ${props.isRed ? 'is-rounded my-class is-danger is-small' : ''}
    ${props.isGreen ? 'is-small is-success' : ''}
    `;

    
    return(
    <button className={buttonStyles}>{props.children}</button>       
    );
    }
    
    export default CoolButton;