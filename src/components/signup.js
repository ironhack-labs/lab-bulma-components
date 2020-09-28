import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "../navbar/Navbar"
import Formfield from "../formfield/Formfield"
import CoolButton from "../coolButton/CoolButton"
const Signup = () => {

  return (
    <>
    <Navbar/>

    <section className="form-top">
    <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
    <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </section >
    <CoolButton  className="button is-rounded is-Small is-danger">button 1</CoolButton>
    <CoolButton  className="button is-Small is-success">Button 2</CoolButton>
  </>
  )
}

export default Signup;