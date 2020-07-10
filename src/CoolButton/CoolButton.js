import React, { Component } from 'react'
import 'bulma/css/bulma.css'

const CoolButton = props => {
    return (
      <div>
        <button className="coolButton">{props.text}</button>
      </div>
    );
  }


  export default CoolButton