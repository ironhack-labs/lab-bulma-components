import React from 'react'
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/Formfield'
import CoolButton from '../coolButton/CoolButton'

export default function Signup() {

    return (
        <div>
            <Navbar/>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith"/>
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <Formfield label="Password" type="password" placeholder="Password"/>
            <CoolButton buttonClass="button is-small is-success" text="Submit"/>
        </div>
       
      );
}