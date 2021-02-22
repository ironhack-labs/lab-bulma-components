import React from 'react';
import "./Signup.css";



import Navbar from './../navbar/Navbar'
import FormField from './../formfield/FormField'
import CoolButton from './../coolbutton/CoolButton'
import Message from './../message/Message'

const message = {
  title: 'Hello world',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  strong: 'Pellentesque risus mi'
}

const Signup = (props) => {
  return (
    <div className="container">
     <Navbar />
      <div className="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Password" />
        <CoolButton action="Submit" className="button is-small is-success"></CoolButton>
      </div>
        <Message title={message.title} text={message.text} strong={message.strong}></Message>
    </div>
  )
}
export default Signup;