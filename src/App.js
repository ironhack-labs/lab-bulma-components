import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
 import Signup from "./signup/Signup";
import Container from "./container/Container";
import Message from "./container/Message";

const App = () => {
  return (
    <div>
  <Navbar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <br/>
  <br/>
  <Signup />
  <br/>
  <br/>
  <Container />
    </div> 
  );
};

export default App;
