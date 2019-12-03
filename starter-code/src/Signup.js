import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

function Signup (props) {
        return(
            <div className="signup">
            <Navbar />
            <form>
                <FormField label="Name" type="text" placeholder="Your name"/>
                <FormField label="Email" type="email" placeholder="email" />
                <FormField label="password" type="password" placeholder="password" />
                <CoolButton classBtn="button is-small is-success" name="Submit"/>
            </form>
            </div>
        )
    }

export default Signup;