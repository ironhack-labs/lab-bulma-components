import React from 'react';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolBtn from './coolBttn/CoolBtn';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="form">
        <FormField label="Name" type="text" placeholder="Alex Smith" />
        <br></br>
        <FormField label="Email" type="email" placeholder="alexsmith@gmail.com" />
        <br></br>
        <FormField label="Password" type="password" placeholder="*********" />
        <br></br>
        <CoolBtn label="Submit" details="button is-primary"/>
      </div>
    </div>
  );
};

export default App;
