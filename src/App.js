import React from 'react';
import {Navbar} from './navbar/Navbar';
import {FormField} from './formfield/FormField';
import {CoolButton} from './coolbutton/CoolButton';

const App = () => {
  return (
    <div>
    <Navbar>
      <CoolButton isPrimary className="button" name="Login"></CoolButton>
      <CoolButton isDanger className="button" name="Signup"></CoolButton>
    </Navbar>
    </div>
  )
};

export default App;
