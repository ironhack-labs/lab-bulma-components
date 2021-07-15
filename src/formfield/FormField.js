import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { render } from 'react-dom';
import './FormField.css'



function FormField(props) {
  
  return (<div>
    <div  class = "field"> 
  <label  class = "label">{props.label} </label> 
  <div  class = "control"> 
    <input  class = "input" type = {props.type} placeholder = {props.placeholder} />
   </div> 
</div> 

  </div>);
}


export default FormField