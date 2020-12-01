import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './CoolButton.css'

const CoolButton = () => {
    return (
        <div className="buttons">
            <button className="button is-rounded my-class is-primary is-small">CLick Me</button>
            <button className="button is-small is-danger">Me too</button>
        </div>
    );
}

export default CoolButton; 