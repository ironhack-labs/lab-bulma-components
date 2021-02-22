import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton';
import 'bulma/css/bulma.css';
import Signup from './Signup/Signup';
import Message from './message/Message';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container is-widescreen">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton classes="button is-rounded my-class is-small is-danger">Button 1</CoolButton>
        <CoolButton classes="button is-small is-success">Button 2</CoolButton>
        <Signup />
        <Message title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    </>
  );
};

export default App;
