import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './CoolButton.css'

const CoolButton = () => {
    return (
        <div className="buttons">
            <button className="button is-rounded my-class is-danger is-medium">Button 1</button>
            <button className="button is-success is-medium">Button 2</button>
        </div>
    );
}

export default CoolButton; 