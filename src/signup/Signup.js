import React from 'react'
import CoolButton from '../CoolButton/CoolButton';
import FormField from '../formfield/Formfield';
import Navbar from '../navbar/Navbar';
import 'bulma/css/bulma.css';


let Signup = (props) => {
        return(
            <div>
                    
                        <FormField label="Name" type="text" placeholder="Your name goes here" />
                        <FormField label="Email" type="email" placeholder="Your email goes here" />
                        <FormField label="password" type="password" placeholder="Your password goes here" />
                        <CoolButton class="button is-small is-success" name="Signup"/>
            </div>
            
        );
};

export default Signup