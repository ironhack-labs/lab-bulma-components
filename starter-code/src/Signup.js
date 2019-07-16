import React from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";

class Signup extends React.Component {
  render() {
  
  return (
    <div>
      <Navbar/>
      <div class="columns is-mobile is-centered">
  <div class="column is-one-quarter">
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" />
    <CoolButton isSmall isSuccess>Submit</CoolButton>
    </div>
    </div>
    </div>
  )
  }
}


export default Signup;