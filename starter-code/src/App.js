import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from './NavBar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';
import SignUp from './SignUp.js';

function App() {
  return (
    <div className="App">
    <NavBar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="123456" />
    <CoolButton className="button is-rounded my-class is-danger is-small">Submit</CoolButton>
    </div>
  );
}

export default App;