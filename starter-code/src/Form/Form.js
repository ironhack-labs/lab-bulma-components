import React from 'react';
import FormField from "../FormField/FormField"
import "./Form.css"
import CoolButton from "../CoolButton/CoolButton"

function Form(){
  return (
    <form class="form">
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="Password" />
    <CoolButton className="button is-danger" buttonText="Submit"/>
    </form>
  )
}

export default Form