import React from "react"
import FormField from "./../FormField/FormField"
import CoolButton from "./../CoolButton/CoolButton"

export default function form() {
  return (
    <form className="form">
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton className="button is-rounded my-class is-danger is-small"/>
      <CoolButton className="button is-small is-success"/>
    </form>
  )
}
