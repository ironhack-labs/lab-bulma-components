import React, { Component } from 'react'
import NavBar from '/NavBar/navBar';
import FormField from '/formField/formField';
import CoolButton from '/coolButton/coolButton';


export default class Signup extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="is-rounded my-class button is-small is-danger">Button 1</CoolButton>
        <CoolButton className="is-small button is-success">Button 2</CoolButton>

      </div>
    )
  }
}
