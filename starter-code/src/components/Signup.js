import CoolButton from './CoolButton'
import NavBar from './NavBar'
import FormField from './FormField'

import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton btn="is-rounded my-class is-danger is-small">Button 1</CoolButton>
        <CoolButton btn="is-small is-success">Button 2</CoolButton>
      </div>
    )
  }
}
