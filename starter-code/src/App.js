import React from "react";
import {Navbar} from "./navbar.js";
import {FormField} from "./formfield.js";
import {CoolButton} from "./button.js";


export const App = () => {

  let myclass= {
        isRounded: "button is-rounded",
        isSmall: "button is-small",
        isDanger: "button is-danger",
        isSuccess: "button is-success",
  }
  return (
      
    <div>
      <Navbar  />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="e.g. ---------" />
      <CoolButton isSmall isDanger className="is-rounded">Sign up</CoolButton>
      <CoolButton isSmall isSuccess>Log in</CoolButton> 
    </div>
  )

}
