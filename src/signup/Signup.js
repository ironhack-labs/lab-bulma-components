import 'bulma/css/bulma.css';
import '../signup/Signup.css';
import React from 'react';
import {Navbar} from '../navbar/Navbar'
import {FormField} from '../formfield/FormField';
import {CoolButton} from '../coolbutton/CoolButton';

function Signup() {
    return (
        <React.Fragment>
        <Navbar>
            <CoolButton isPrimary className="button" name="Login"></CoolButton>
            <CoolButton isDanger className="button" name="Signup"></CoolButton>
        </Navbar>
        <form>
            <FormField label="Name" type="text" placeholder="e.g Daina Slezaite" />
            <FormField label="Email" type="email" placeholder="e.g daina@gmail.com" />
            <FormField label="Password" type="password" placeholder="******" />
            <CoolButton isDanger className="button" name="Submit" type="submit"></CoolButton>
        </form>
        </React.Fragment>
    )
}

export {Signup};