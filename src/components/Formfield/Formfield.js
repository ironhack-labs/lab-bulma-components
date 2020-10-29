import React from 'react';

import './Formfield.css';

const formfield = ({ label, type, placeholder }) => {
    return (
    <div className="field">
    <label className="label">{label}</label>
    <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
    </div>
    </div>
    );
};

export default formfield;