import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar} from "./navbar/Navbar"
import {FormField} from "./formfield/FormField"
import {CoolButton} from "./coolButton/CoolButton"
import SignUp from "./signup/Signup"

const App = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> 
    
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    
      <CoolButton/> */}
      <SignUp/>
    
    </React.Fragment>
  )
};

export default App;