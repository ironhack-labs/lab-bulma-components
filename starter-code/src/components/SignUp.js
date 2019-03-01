import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Message from './Message';

export default class SignUp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <FormField label="Password" type="password" />
              <CoolButton isSmall isPrimary>Sign Up</CoolButton>
            </div>
            <div className="column is-half">
              <Message isInfo title="Hello World">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
              </Message>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}
