import React, { Component } from 'react';
import Navbar from "./../navbar/Navbar";
import Formfield from "./../formfield/Formfield";
import CoolButton from "./../coolbutton/CoolButton";
import 'bulma/css/bulma.css';

class Signup extends Component {
render(){
    return(
<div>
            <Navbar />
            <Formfield label="Name" placeholder="e.g Alex Smith" />
            <Formfield label="Email" placeholder="e.g alexsmith@gmail.com" />
            <Formfield label="Password" placeholder="password" />
            <CoolButton class="button is-success" name="Sign up">Sign Up</CoolButton>
</div>
    )
}

}


export default Signup;