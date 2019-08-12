import React from 'react'
import Navbar from './Navbar'
import Formfield from './Formfield'
import Coolbutton from './Coolbutton';

const Signup = () => {

    return(
        <div>
        <Navbar/>
        <Formfield name="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield name="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Formfield name="Password" type="password" placeholder="Your password" />
        <Coolbutton className="button is-danger" name="Submit"/>
        </div>
        )
}

export default Signup