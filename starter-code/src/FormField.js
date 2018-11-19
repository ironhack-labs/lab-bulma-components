import React from 'react';

const FormField = ({ lName, iName, iType, placeholder }) => (
    <div className="field">
        <label className="label">{lName}</label>
        <div className="control">
            <input className="input" type={iType} name={iName} placeholder={placeholder}/>
        </div>
    </div>
);

export default FormField;