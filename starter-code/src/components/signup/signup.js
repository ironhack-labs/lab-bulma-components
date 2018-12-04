import React, { Component } from 'react'    
import Navbar from '../navbar/navbar';
import FormField from '../formField/formField';
import Message from '../message/message';

export default class Signup extends Component {

    
  render() {
    return (
      <div>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
       <Message isInfo title="Hello World">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
       </Message>
      </div>
    )
  }
}

  