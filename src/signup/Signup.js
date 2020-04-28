import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import Message from '../message/Message';
import 'bulma/css/bulma.css';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup-div">
        <Navbar />
        <div className='container'>
                <form>
                    <FormField label="Name" type="text"/>
                    <FormField label="Email" type="email"/>
                    <FormField label="Password" type="password"/>
                    <CoolButton classTag="is-success button is-rounded">Submit</CoolButton>
                </form>
                <Message title='Hello World!'/>
            </div>
        </div>
    );
}

export default Signup;