import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const Formfield = (props) => {
    return (
      <div className="Formfield col-6" style={{display:props.style}}>
        <div className="field  form-group">
          <label className="label">{props.label}</label>
          <div className="control">
            <input className="input form-control" type={props.type} placeholder={props.placeholder} />
          </div>
        </div>
      </div>
    );
}

export default Formfield;