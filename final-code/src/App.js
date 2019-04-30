import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from "./components/Navbar"
import FormField from "./components/FormField"
import Button from "./components/CoolButton"
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      < Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <div class="field is-grouped">
        <Button className="button is-rounded my-class is-small is-danger" value="Button 1"/>
        <Button className="button is-small is-success" value="Button 2"/>
      </div>
    </div>
  );
}

export default App;
