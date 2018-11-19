import React from 'react';

const FormField = ({labelName, inputName, inputType, placeholder}) => (
 <div className="field">
   <label className="label">{labelName}</label>
   <div className="control">
     <input className="input" type={inputType} name={inputName} placeholder={placeholder}/>
   </div>
 </div>
)

export default FormField;