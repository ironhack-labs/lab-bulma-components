import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav'
import FormField from './components/FormField';
import CoolButton from './components/CoolButton'


class App extends Component {
  state = {
    button1 :{
        isPrimary : 'is-primary',
        isSuccess: 'is-success',
        isDanger: 'is-danger',
    }

  }
  render() {
    return (
      <div>
        <Nav />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    );
  }
}

export default App;
