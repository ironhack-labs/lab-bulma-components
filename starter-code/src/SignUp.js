import React from "react"
import FormField from "./FormField"
import CoolButton from "./CoolButton"


function Signup() {
  return <div>
  
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <FormField label="Password" type="input" />
  <CoolButton type="is-danger" class="is-rounded" input="confirm"/>

  </div>
}

// if i style the CoolButton in Signup.css and access it by it's className "is-danger" 
// this will also affect the styling of all other buttons with this class
// should i add a prop for an individual class for each button?
// does this mean there is no sense in creating a separate Sign-up.css file since the whole doc
// inherits from it anyway ?


export default Signup