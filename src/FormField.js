import React from "react";

function FormField(props){


 return (
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">{props.label}</label>
    <input type={props.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.placeholder}/>
  </div>
 )   
}

export default FormField