import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const Button = (props) => {
    return (
      <button className={props.classType}  onClick={props.onClick}>
        {props.text}
      </button>
    );
}

export default Button;