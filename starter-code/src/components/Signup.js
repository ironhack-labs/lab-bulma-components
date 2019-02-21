import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';

export default class Signup extends Component {
  render() {
    return(
      <div className="Signup">
        <Navbar />
        <div className="columns is-centered" style={{ marginTop: '10px' }}>
          <div className="column is-half">
            <form action="">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <FormField label="Password" type="password" placeholder="Enter your password" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}