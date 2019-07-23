import React from "react";
import "../../App.css";
import "bulma/css/bulma.css";
import { directive } from "@babel/types";

function CoolButton(props) {
  return (
<div>
<button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>
</div>
  );
}

export default CoolButton;

//bonus
//iterate through key - property pairs 
//make into string variable 
//make a method of sorts that combines all the true classes 
//return 