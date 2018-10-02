import React from "react";
import {Navbar} from "./navbar.js";
import {FormField} from "./formfield.js";
import {CoolButton} from "./button.js";


export const App = () => {

  let myclass= {
        isRounded: "is-rounded",
        isSmall: "is-small",
        isDanger: "is-danger",
        isSuccess: "is-success",
  }
  return (
      
    <div>
      <Navbar  />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall={myclass.isSmall} isDanger={myclass.isDanger} className="is-rounded my-class">Login</CoolButton>
      <CoolButton isSmall={myclass.isSmall} isSuccess={myclass.isSmall}>Sign up</CoolButton>
    </div>
  )

}
