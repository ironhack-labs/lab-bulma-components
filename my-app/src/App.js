import React, { Component } from 'react';
import './App.css';
import  FormField from'./FormField.js'
import CoolButton from'./CoolButton.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row fix-the-row">

        <div>
        <a href="/">Home</a>
        </div>

        <div className="fix-it">
        <CoolButton whoever="Login" isSmall isDanger className="is-rounded my-class"></CoolButton>
        <CoolButton id="move-it" whoever="Signup" isSmall isSuccess></CoolButton>
        </div>

        </div>
      </div>

      <FormField whatever="Name" id="fix-input" label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField whatever="Email" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

 

      </div>
    );
  }
}

export default App;
