import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css'
import Navbar from '../navbar/Navbar';

function SignUp(){

    return(
        <div>
        <Navbar></Navbar>
        <FormField label1="Name" type1="text" placeholder1="e.g Alex Smith" />
        <FormField label1="Email" type1="email" placeholder1="e.g. alexsmith@gmail.com" />
        <FormField label1="Password" type1="password" placeholder1="password" />
        <CoolButton isPressed={true} name="Log In" ></CoolButton>
        </div>
    )
}


export default CoolButton;

