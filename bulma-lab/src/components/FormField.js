import React from 'react';
import '../App.css';

class FormField extends React.Component{

  render(){
    return(
    <div>
    <div className="field">
      <label className="label">{this.props.label}</label>
      <div className="control">
      <input className={this.props.input} type={this.props.type} placeholder={this.props.placeholder}/>
      </div>
    </div>
    
    </div>
    )
    // End of return
  }
  // End of render

}
// End of class NavBar

export default FormField;