import React from 'react';
import "./App.css";
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import SingUp from "./signup/SignUp";

const App = props => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <div>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      </div>
      <div>
        <SingUp></SingUp>
        
      </div>
    </div>
  )
}

export default App;
