import React, {Component} from 'react'
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" />
        
        <CoolButton className="button is-small is-primary">Signup</CoolButton>
      </div>
    )
  }
}
