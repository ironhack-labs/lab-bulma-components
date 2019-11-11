import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-components/navbar'
import FormField from './components/form-components/forms'
import CoolButton from './components/form-components/button'
import SignUp from './components/signup-component/signup'
import Container from './components/container-component/container'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SignUp/>
      </div>
    );
  }

}

export default App;
