import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <FormField label="Name" type="text" placeholder="e.g Jorge Smith"/>
        <FormField label="Email" type="email" placeholder="e.g. jorgesmith@gmail.com" />
        <CoolButton className="button is-small is-danger is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    );
  }
}

export default App;
