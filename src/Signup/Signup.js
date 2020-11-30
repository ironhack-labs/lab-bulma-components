import 'bulma/css/bulma.css';
import './Signup.css';
import React from 'react';
import CoolButton from './../CoolButton/CoolButton';
import NavBar from './../navbar/Navbar';
import FormField from './../formfield/FormField';

const Signup = () => {
    return (
        <section>
            <h1>New Sign Up Page</h1>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton className="button is-success" textButton="Signup" />
        </section>

    )
}

export default Signup