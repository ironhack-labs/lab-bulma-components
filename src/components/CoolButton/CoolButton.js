import React from 'react';
import "./CoolButton.css";

const CoolButton = (props) => {
    const mountClass = () => {};

    return (
    <button className= {`button ${mountClass()}`} > {props.children} </button>

    );
};

export default CoolButton;