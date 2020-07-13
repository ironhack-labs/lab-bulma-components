import React from "react"
import './CoolButton.css'
import 'bulma/css/bulma.css'

const CoolButton = props => {
    return (

        <div className="container">
        <button type={props.type} className={props.styleClass}> {props.text} </button>
        </div>
    );
  };


export default CoolButton