import React, { Component } from "react";
import CoolButton from "../CoolButton/CoolButton"
import Navbar from "../Navbar/Navbar"
import Formfield from "../Formfield/Formfield";



class SignUpPage extends Component {
    render() {
        return(
        <div>
         <Navbar></Navbar>
         <form action="">
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith"/>
        <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        <Formfield label="Password" type="password" placeholder="password"/>
        </form>
        <CoolButton isSmall className="is-rounded my-class">Submit</CoolButton>
        </div>
       )
    }
}

export default SignUpPage;