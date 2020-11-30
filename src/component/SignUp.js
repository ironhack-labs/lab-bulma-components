import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from './CoolButton';
import './SignUp.css';
import 'bulma/css/bulma.css';


function SignUp() {

    return (
        
        <div>
            
            <Navbar />

            <FormField
                label="Name"
                placeholder="Alex Smith"

            />

            <FormField
                label="Email"
                placeholder="alexsmith@gmail.com"
            />

            <FormField
                label="Password"
                placeholder="Password"
            />

            <div className ="Button-submit">
            <CoolButton
                class="button is-small is-success"
                buttontext="Submit"
            />
            </div>
        </div>

        

    )

}

export default SignUp;