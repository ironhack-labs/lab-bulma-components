import React from "react"; 

class FormField extends React.Component { 
  render() {

    return (
      <div className="FormField">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
} 

export default FormField;