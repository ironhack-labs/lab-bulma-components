import React, { Component } from "react";
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';
import NavBar from "../components/NavBar";
import Message from "../components/Message";


export default class Signup extends Component {


  render() {
    return (
      <div className="Signup">
        <NavBar />
        <div className="container has-margin-top-30">
          <div className="columns">
            <div className="column">
              <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="password" />
                <CoolButton isInfo>Register</CoolButton>
              </form>
            </div>
            <div className="column">
              <Message title="Hello World" isInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi.</strong></Message>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
