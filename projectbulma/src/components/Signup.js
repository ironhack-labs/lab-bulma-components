import React from 'react'
import Navbar from './navBar'
import FormField from './FormField'
import CoolButton from './CoolButton'



const Signup = () => {
    return (<div>
        <div>
            <Navbar />
        </div>
        <div>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Password" /> 
        </div>
        <div>
            <CoolButton numOfButtons={1} content="Sign Up" />

        </div>

    </div>



    );
}



    export default Signup
