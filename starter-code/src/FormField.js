import React from "react";
const FormField = props => {

 return (
   <div className="field">
     <label className="label">{props.data.label}</label>
     <div className="control">
       <input
         className="input"
         type={props.data.type}
         placeholder={props.data.placeholder}
       />
     </div>
   </div>
 );
};
export default FormField;