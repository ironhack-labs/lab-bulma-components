import React from 'react';
import './SignUp.css';

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolButton/CoolButton';
import Message from '../message/Message';


const SignUp = () => {
  return (

    <>
    <Navbar linkHome="/home" linkLogin="/login" linkSignUp="/signUp" />

    <div className="container-singup">
        
        <Message classArticleBulma="message is-primary" title="Hello React" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."/>     
        
        <form action="#" method="POST" className= "container-form">
          <FormField label="Name" name="name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" name="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" name="password" type="password" placeholder="Password" />
          <CoolButton type="submit" styleClass="button my-class is-warning is-medium" text="Sign up"/>
        </form>

    </div>

    </>
  
  )
};

export default SignUp;