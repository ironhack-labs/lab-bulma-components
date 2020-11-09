import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './CoolButton.css'

const CoolButton = () => {
    return (
        <div className="buttons">
            <button className="button is-rounded my-class is-danger is-small">Button 1</button>
            <button className="button is-small is-success">Button 2</button>
        </div>
    );
}

export default CoolButton;