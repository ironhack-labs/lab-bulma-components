import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './button/CoolButton.js';
import Signup from './signup/Signup.js';
import Message from './message/Message.js';
import 'bulma/css/bulma.css';


const App = () => {

  return (

    <div className="App">

      <Navbar />

      <div className="Form">
        <FormField myLabel="Name" myType="text" myPlaceholder="e.g Alex Smith" />
        <FormField myLabel="Email" myType="email" myPlaceholder="e.g. alexsmith@gmail.com" />
      </div>
      
      {/* <CoolButton className="is-rounded my-class" isSmall isDanger >Button 1</CoolButton>
      <CoolButton isSmall isSuccess >Button 2</CoolButton> */}

      {/* <Signup /> */}

      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
