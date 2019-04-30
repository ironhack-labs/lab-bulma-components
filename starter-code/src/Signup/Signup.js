import React from 'react';
import Navbar from "../Navbar/Navbar"
import Form from "../Form/Form"
import Message from "../Message/Message"

function Signup(){
  return(
    <div>
      <Navbar />
      <Form />
      <Message className="message-box" messageTitle="small info before login" messageText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi."/>
    </div>
  )
}

export default Signup;