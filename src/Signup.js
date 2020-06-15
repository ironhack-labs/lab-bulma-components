import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formField/FormField'
import CoolButton from './button/button';




function Signup(props) {

    return (<div>

    <Navbar />

    <FormField 
    label={props.label} 
    type={props.type}
    placeholder="e.g Alex Smith" />

    <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>


    </div>)

}


export default Signup