import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './FormField.css'

const FormField = ({label, type, placeholder}) => {
    return (
        <div className="form">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    );
}

export default FormField;