import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField';

class Signup extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                    <div>
                        <FormField label="Name:" type="text" placeholder="Ashley Vermaas"/>
                        <FormField label="Email:" type="email" placeholder="ashley@gmail.com"/>
                        <FormField label="Password:" type="password" placeholder="*****"/>
                        <CoolButton className="is-danger" name="Submit" />
                    </div>
            </div>
        )
    }
}

export default Signup;