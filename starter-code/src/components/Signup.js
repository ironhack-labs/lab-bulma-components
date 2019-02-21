import React, { Component } from 'react';
import NavBar from './NavBar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Message from './Message'

export default class Signup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
            <NavBar />
            <div className="container">
              <div className="columns">
                <div className="column ">
                  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                  <FormField label="Password" type="password" placeholder="*******" />
                  <CoolButton className="button is-primary">Submit</CoolButton>
                </div>
                <div className="column is-centered">
                  <Message title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi.</strong></Message>
                </div>
              </div>
            </div>
          </div>
        );
    }
}