import React from 'react';
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';


const Signup = props => {

    return (
        <>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="******" />
            <CoolButton className="button mt-3 mb-5 is-success" type="submit" text="Signup" />
        </>
    )

}


export default Signup
