import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
        <div className="Signup">
            <Navbar />
            <div className="fields m-6">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="***********" />
            </div>
            <CoolButton className="button is-dark mx-6" type="submit" title="Signup" />
        </div>
    )
}

export default Signup;