import React from 'react';
import Navbar from "./navbar/Navbar"
import FormField from "./formfield/FormField"
import CoolButton from "./buttons/Buttons"
import Message from "./message/Message"
import 'bulma/css/bulma.css';

class App extends React.Component {

  render(){
      return (
          <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <Message isInfo title='Hello World'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
          </div>
      )
  }
}

export default App;
