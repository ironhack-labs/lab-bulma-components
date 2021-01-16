import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import {Signup} from './signup/Signup'
import 'bulma/css/bulma.css';



function App() {
  return(
    <div>
      <h1>First Section</h1>
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class isSmall isDanger">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
      <h1>Second Section</h1>
      <Signup />
    </div>
  );
}

export default App;
