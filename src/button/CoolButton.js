import React from "react";

import "bulma/css/bulma.css";

import "./CoolButton.css";

const CoolButton = (props) => 
  props.isDanger 
  ?  <button className="button is-rounded my-class is-danger is-small">Button1</button>
  : <button className="button is-small is-success">Button2</button>;
  
  export default CoolButton;
  
