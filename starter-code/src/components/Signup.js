import React from "react"
import Nav from "./Nav"
import FormField from "./FormField"

const Signup = () => {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="******" />
    </div>
  )
}

export default Signup