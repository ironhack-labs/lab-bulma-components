import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import Signup from './signup/Signup'
import CoolButton from './coolbutton/CoolButton'

const App = () => {
  return (
    <div>
      <Navbar
        url="https://bulma.io/images/bulma-logo.png"
        item="Home"
        buttonLogin="Login"
        buttonSignup="Signup"
      />
      <FormField 
        label="Name" 
        type="text" 
        placeholder="e.g Alex Smith" 
      />
      <FormField 
        label="Email" 
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>

     
      <Signup 
      />
    </div>

  );
};

export default App;