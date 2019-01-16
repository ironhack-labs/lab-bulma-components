import React from "react";

const FormField = ({ Name, type, placeholder }) => {
  return (
    <div className="container-formfield">
    <div class="field">
      <label class="label"> {Name} </label>
      <div class="control">
        <input class="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  </div>
  )
}

export default FormField;
  
