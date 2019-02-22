import React from "react"; 

class FormField extends React.Component { 
  render() {

    const {label, type, placeholder} = this.props;

    return (
      <div className="FormField">
      <p>{label}</p>
      </div>
    );
  }
} 

export default FormField;