import React from 'react'
import CoolButton from '../CoolButton/CoolButton';
import FormField from '../formfield/Formfield';
import Navbar from '../navbar/Navbar';


let Signup = (props) => {
        return(
            <div>
                <div className='field'>
                    <Navbar />
                        <FormField label="Name" type="text" placeholder="Type your name" />
                        <FormField label="Email" type="email" placeholder="Type your email" />
                        <FormField label="password" type="password" placeholder="Type your password" />
                        <CoolButton />
                </div>
            </div>
        );
};

export default Signup
