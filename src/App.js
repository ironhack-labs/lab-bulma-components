import React from 'react';
import NavBar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import Message from "./message/Message"

const App = () => {
  return (
  <div>
    <NavBar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <Message isInfo={'is-info'} title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message> 
  </div>
  )
};

export default App;
