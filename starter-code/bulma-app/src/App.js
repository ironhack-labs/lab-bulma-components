import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FormField from './components/Formfield'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'
import Message from './components/Message'

function App() {
  return (
    <>
      <Navbar />
      <div className='formField'>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="******" />
      </div>

      <div className='button'>
        <CoolButton isSuccess className="button is-danger is-rounded" text='Button 1'></CoolButton>
        <CoolButton className="button is-success" text='Button 2'></CoolButton>
      </div>
      <Message isInfo title="Hello World" text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."/>

      <Signup />

  

    </>
  );
}

export default App;
