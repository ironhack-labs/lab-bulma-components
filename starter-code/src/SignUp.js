import React from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js'
import "bulma/css/bulma.css";


class SignUp extends React.Component {

    render() {
        return(

            <div>
                <Navbar />

                <form>
                    <FormField label="Name" type="text" placeholder="Name" />
                    <FormField label="Email" type="email" placeholder="Email"/>
                    <FormField label="Password" type="password" placeholder="password"/>

                    <CoolButton  isSuccess buttonvalue="Submit" button='is-large'></CoolButton>
                
                </form>
            
            

            </div>
        )
    }
}


export default SignUp;