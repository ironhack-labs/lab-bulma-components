import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from "./navbar/Navbar";
import FormField from './formfield/FormField.js'
import CoolButton from "./buttons/CoolButton";
import Signup from './signup/Signup.js'

const App = () => {
  return(
    <div class = "myApp">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDark isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <Signup />
    </div>
  )

};

export default App;