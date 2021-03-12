import React from 'react';
import 'bulma/css/bulma.css';

const FormField = ({ label, type, placeholder }) => {
    return (
        <div>
            <div className='field'>
                <label className='label'>{label}</label>
                <div className="control">
                    <input className="input" type={type} placeholder={placeholder} />
                </div>
            </div>
        </div>
    );
};

export default FormField;