import React, { Component } from "react";
import Nav from '../../Components/nav/nav'
import FormField from '../../Components/formfield/formfield'
import CoolButton from '../../Components/coolbutton/coolbutton'
import Message from '../../Components/message/message'
class Signup extends Component {

  render() {
    return (
      <div className="App">
       <Nav/>
       <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
       <FormField label="E-mail" type="email" placeholder="e.g alexsmith@gmail.com" />
       <FormField label="Password" type="text" placeholder="e.g coolboy55" />
       <CoolButton isSmall isSuccess>Submit</CoolButton>
       <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default Signup;
