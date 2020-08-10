import React from 'react'
import './Formfield.css'
const Formfield = props =>{
    return ( 
    
    <div  className="field">
         <label  className="label">{props.label}</label>
        <div  className="control">
    <input  className="input" input type={props.type} placeholder={props.placeholder} />
  </div>
</div>

); 
}
export default Formfield;