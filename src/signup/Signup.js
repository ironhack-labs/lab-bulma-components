import React, { Component } from 'react';
import './Signup.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <form>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="*********" />
                    <CoolButton isPrimary>Submit</CoolButton>
                </form>
            </div>
        );
    }
}

export default Signup;