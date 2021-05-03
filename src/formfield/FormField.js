import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

// function FormField(){

// return (

// <div>
//     <div className="field">
//     <label className="label">Name</label>
//     <div className="control">
//         <input className="input" type="text" placeholder="e.g Alex Smith" />
//     </div>
//     </div>
//     <div className="field">
//     <label className="label">Email</label>
//     <div className="control">
//         <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
//     </div>
//     </div>
// </div>
// )
// }

const FormField = ({ type, label, placeholder }) => {
  return (
    <div className='field'>
      <label className='label'>{label}</label>
      <div className='control'>
          <input className='input' type={type} placeholder={placeholder} />
      </div>     
    </div>
  );
};

export default FormField;