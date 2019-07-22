import React, { Component } from 'react';
import Container from "./Container";



class FormField extends Component {
    render(){
  
    return (
    
<Container>
    

  <div className="field">
  <label className="label">{this.props.name}</label>
  <div className="control">
    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
  </div>

  </div>
  
  </Container>

    

    );
    }
  }
  
  export default FormField;
  