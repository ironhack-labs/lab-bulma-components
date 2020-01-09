import React, { Component } from 'react';
import Nav from './components/Nav.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';
import Message from './components/Message.js';
import "../public/style.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <form className="formWrapper">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </form>
        <div className="buttonDiv">
          <CoolButton className="button is-rounded my-class is-danger is-small" name="Button1"></CoolButton>
          <CoolButton className="button is-small is-success" name="Button 2"></CoolButton>
        </div>
        <div className="message">
          <Message className="message-body is-info" title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </div>
      </React.Fragment>
    )
  }
}

export default App;