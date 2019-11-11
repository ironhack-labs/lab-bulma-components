import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import BulmaComp from './bulmaComp';
import FormField from './formField';
import CoolButton from './CoolButton';
import Message from './message';

function App() {
  return (
    <div className="App">
      <BulmaComp />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" />
      <CoolButton isSuccess isDanger name="Submit"/>
      <Message header/>
    </div>
  );
}

export default App;
