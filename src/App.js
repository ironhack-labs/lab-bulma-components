import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from './navbar/Navbar'
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton';
import Signup from './Signup/Signup'
import Message from './Message/Message'



const App = () => {
  return (
    <main className="hero">
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*******" />
      <CoolButton className="button is-success" textButton="Signup" />
      <Signup />
      <Message title="Hello World" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " span="Pellentesque risus mi."/>
    </main>
  );
};

export default App;
