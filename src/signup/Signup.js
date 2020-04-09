
import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from '../coolButton/CoolButton'
import Navbar from '../navbar/Navbar'
import FormField from '../formField/FormField'

const Signup = () => {
    return (
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <FormField label="Password" type="password" placeholder="******"/>
            <CoolButton className="button is-success" href="" value="Signup"/>
        </div>
    );
};

export default Signup;