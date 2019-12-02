import React from 'react';
import './App.css';
import NavbarComponent from './NavbarComponent';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './Signup';


class App extends React.Component {


  render() {
    return (
      <div className="App">

        <NavbarComponent />
        <FormField />
        <CoolButton buttonClass="is-rounded my-class is-danger is-small"  text="login"/>
        <CoolButton buttonClass="is-small is-success" text="signup"/>

        <Signup />

      </div>
    );
  }
}

export default App;