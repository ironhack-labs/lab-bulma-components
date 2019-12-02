import React, { Component } from 'react'
import CoolButton from "../CoolButton/CoolButton";
import BulmaNavbar from '../BulmaNavbar/BulmaNavbar';
import FormField from '../FormField/FormField';



export default class SignUp extends Component {
    render() {
        return (
            <div>
            
            <BulmaNavbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton class="isSmall isSuccess" text="Submit"/>
          
            </div>
        )
    }
}