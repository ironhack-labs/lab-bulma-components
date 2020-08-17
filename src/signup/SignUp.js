import React from 'react';
import Navbar from '../navbar/Navbar';
import Formfield from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

function SignUp (props){
    return(
        <div>
            <Navbar LogIn='Log In' SignUp='SignUp'/>
            <Formfield label="Name" type="text" placeholder="John Doe"/>
            <Formfield label="Email" type="email" placeholder="Johndoe@gmail.com"/>
            <Formfield label="Password" type="password" placeholder="Password"/>
            <CoolButton isSmall isSuccess>SignUp</CoolButton>

        </div>
    )
}


export default SignUp