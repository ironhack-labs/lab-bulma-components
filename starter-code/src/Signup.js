import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Navbar from './Navbar'

const Signup = props => {
const btn = {
   text: "submit",
   isRounded: true,
   myClass: true,
   isSmall: true,
   type: "button"
 };

 const formName = {
   type: "text",
   label: "Name",
   placeholder: "e.g Alex Smit"
 };

  const formEmail = {
   type: "email",
   label: "Email",
   placeholder: "e.g. alexsmith@gmail.com"
 };
  const formPass = {
   type: "password",
   label: "password",
   placeholder: "******"
 };
 

  return (
    <div>
      <Navbar />
      <FormField data={formName}/>
      <FormField data={formEmail}/>
      <FormField data={formPass}/>
      <CoolButton data={btn}/>
    </div>
  )
}

export default Signup
