import React from 'react'
import 'bulma/css/bulma.css';
import './CoolButton.css'


const CoolButton = props => {
    return (

        <button type={props.type} className={props.styleClass}> {props.text} </button>

    );
  };


export default CoolButton