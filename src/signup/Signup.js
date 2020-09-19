import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import Message from '../message/Message';

import 'bulma/css/bulma.css';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div class='container is-fluid mt-5'>
        <FormField className='field' label='Name' type='text' placeholder='e.g Alex Smith' />
        <FormField className='field' label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
        <FormField className='field' label='Password' type='password' placeholder='enter a password' />
        <CoolButton className='button is-primary' text='Submit' type='submit' />
        <Message className="message is-info mt-5" title='Hello World' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi.' />
      </div>
    </div>
  )
}

export default Signup;