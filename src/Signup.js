import React, {Component} from "react";
import Navbar from "./navbar/Navbar.js"
import FormField from "./formfield/FormField.js"
import Coolbutton  from "./coolbutton/Coolbutton.js"
import Message from "./message/Message.js"

class Signup extends Component{
  render(){
    return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" />
      <Coolbutton isSmall isDanger className="is-rounded my-class">Submit</Coolbutton>
      <Message isInfo title='Hello World'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>
    </div>
    )
    }
  }
    

export default Signup;
