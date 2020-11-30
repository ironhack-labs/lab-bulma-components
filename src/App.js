import React from 'react';
import Navbar from "./navbar/Navbar"
import FormField from "./formfield/FormField"
import CoolButton from "./buttons/Buttons"
import Message from "./message/Message"
import Signup from './signup/Signup.js';

import 'bulma/css/bulma.css';

class App extends React.Component {

  render(){
      return (
          <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
            <CoolButton className="button is-danger" type="submit" title="Log in"/>
            <CoolButton className="button is-success" type="submit" title="Sign Up"/>
            <Message className="message is-info" title='Hello World' paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strong="Pellentesque risus mi."/>
          </div>
      )
  }
}

export default App;
