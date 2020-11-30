import "bulma/css/bulma.css";
import React from 'react';
import Navbar from '../navbar/Navbar.js'
import Formfield from '../formfield/Formfield.js'
import CoolButton from '../coolButton/CoolButton'

const Signup = () => {
    return (
  <>
  <hr />
    <div className="column is-half is-offset-one-quarter">    <Navbar />
    <div className="column is-half is-offset-one-quarter">
    <Formfield label="Name" type="text" placeholder="e.g. Alex Smith" />
    <Formfield label="Email" type="email" placeholder="e.g. alex.smith@gmail.com" />
    <Formfield label="Password" type="password" placeholder="" />
    <CoolButton buttonClass="is-black is-small" type="submit" text="Submit" href="/test" />
    </div></div>
  </>
    )
  };

  export default Signup;