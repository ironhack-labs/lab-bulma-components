import React  from "react";
import './Formfield.css'
const Formfield = props => {
        return (
            <div className = 'form-component'>
                <label ><strong>{props.label}:</strong> </label>
                <input type = {props.type} placeholder = {props.placeholder}></input>
            </div>
        )
}

export default Formfield