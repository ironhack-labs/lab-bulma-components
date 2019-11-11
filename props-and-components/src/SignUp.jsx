import React, { Component } from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField"


class SignUp extends Component {

    render() {
        return (
            <div class="sign-up">

        <Navbar/>
        <FormField className='FormField' label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField className='FormField' label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </div>
        
            );}
        }



        export default SignUp