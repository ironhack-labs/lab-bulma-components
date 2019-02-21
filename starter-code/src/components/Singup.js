import React, { Component} from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';


export default class SingUp extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password"/>
          <CoolButton className="button is-rounded my-class is-small is-danger"name="submit"></CoolButton>
        </form>
      </div>
    )
  }

}