import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './CoolButton.css'

const CoolButton = props => {
    return (
      <button className={props.classes}>
          {props.text}
      </button>
    );
  };

  export default CoolButton