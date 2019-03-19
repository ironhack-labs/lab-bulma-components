import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

function Signup(props){

    return(

        <section>
            <Navbar />
            <form>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="password" type="password" placeholder="password" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>

            </form>
        </section>


    )
}
export default Signup;