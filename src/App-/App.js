
import React from 'react';
import './App.css';
import Nav from '../Navs/Nav'
import FormField from '../FormField/FormField'
import Signup from '../signup/signup'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <FormField
          label="Name"
        />
        <FormField
          label="Email"
        />
        <hr />
        <Signup
          text="Sign up"
        />

      </header>
    </div>
  )
}

export default App;


//cada entrada de texto se puede sustituir por props para poder reutilizar al max