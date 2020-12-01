import React from 'react';
import 'bulma/css/bulma.css';


function Formfield (props){
    return (
<div className="field">
  <label className="label">{props.label}</label>
  <div className="control">
    <input className="input" type={props.type} placeholder={props.placeholder} style={{width:300}} />
  </div>
</div>
    )};

    export default Formfield ;