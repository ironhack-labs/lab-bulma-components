import React from 'react';
import Navbar from "../src/navbar/Navbar";
import FormField from "../src/formfield/Formfield";
import CoolButton from "../src/coolbutton/Coolbutton";
import Container from "../src/container/Container"
import SignUp from "./signup/Signup";

const App = () => {
  return (
   
    <div>
      <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton label="button 1" isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton label="button 2" isSuccess>Button 2</CoolButton>
        <Container title="Hello world!" />    
        <SignUp />
      </div>
        

  )
};

export default App;
