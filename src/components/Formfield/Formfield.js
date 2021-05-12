import React from 'react'; 
import './Formfield.css'

const Formfield = ({label, type, placeholder}) => {
    return (
        <div class="field">
            <label class="label">{label}</label>
            <div class="control">
                <input class="input" type={type} placeholder={placeholder} />
            </div>
            </div>
    )
};

export default Formfield;