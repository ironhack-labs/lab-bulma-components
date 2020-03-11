import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formField/formField';
import CoolButton from './coolbutton/coolButton';

const App = () => {
  return (
  <div className="app">
    <Navbar/>
    <div className="form">
      <FormField label="Name" placeholder="e.g Alex Smith"/>
      <FormField label="Email" placeholder="e.g. alexsmith@gmail.com"/>
      <div class="buttons">
        <CoolButton cta="Signup" classes="button is-rounded is-primary is-danger"/>
        <CoolButton cta="Login" classes="button is-rounded is-success"/>
      </div>
    </div>
  </div>
  );
};

export default App;
