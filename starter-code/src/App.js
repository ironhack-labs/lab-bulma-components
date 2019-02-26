import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'
import CoolButton from './components/CoolButton'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="columns is-centered" style={{ marginTop: '10px' }}>
          <div className="column is-half">
            <form action="">
              <Form label="Name" type="text" placeholder="e.g Alex Smith" />
              <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <div className="field">
                <p className="control">
                  <CoolButton isSmall isSuccess>Register</CoolButton>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}