import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" icon="fa fa-user" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" icon="fa fa-envelope" />
      {/* <CoolButton classes="button is-rounded my-class is-danger is-small" text="Button 1" /> */}
      <CoolButton classes="button is-small is-success" text="Send" />
    </div>
  )
};

export default App;