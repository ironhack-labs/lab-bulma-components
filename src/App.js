import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";
import Signup from './signup/Signup.js';
import Message from './message/Message.js';

const App = () => {
  return(
    <div>
      <Navbar />
      <Switch>
          <Route path="/signup" component={Signup} />
      </Switch>
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      </form>
      <CoolButton className="button is-rounded is-small is-danger my-class">Button 1</CoolButton>
      <CoolButton className="button is-small is-success">Button 2</CoolButton>
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
    
  )
};

export default App;
