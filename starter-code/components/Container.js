import React, { Component } from 'react'
import CoolButton from './CoolButton'
import FormField from "./FormField"
import Message from "./Message"


export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="alex@smith.com" />
          <FormField label="Password" type="password" placeholder="choose a strong password" />
          <CoolButton className="button is-small is-success">Submit</CoolButton>
        </form>
        <br></br>
        <br></br>
        <Message className="message is-info" title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
      </div>
    )
  }
}
