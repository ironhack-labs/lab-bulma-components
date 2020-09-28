import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import FormField from '../formfield/formfield.js'
import CoolButton from '../CoolButton/CoolButton.js'
import Signup from '../signup/signup.js'

function App() {
  return (
    <div>
      <Signup />
      <section>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </section>
      <div>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>

    </div>
  );
}

export default App;
