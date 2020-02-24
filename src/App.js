import React from 'react';
import './App.css';
import Nav from './Nav'
import FormField from './FormField'
import Signup from './Signup'

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
        <Signup
          text="Sign up"
        />

      </header>
    </div>
  );
}

export default App;
