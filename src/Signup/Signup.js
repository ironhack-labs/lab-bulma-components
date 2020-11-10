import React, {Componentns } from 'react';
import CoolButton from '../CoolButton/CoolButton';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import './Signup.css';

const Signup = props => {

    return(
        <div>
            <form>
            <Navbar></Navbar>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="text" placeholder="alex@alex"/>
            <FormField label="Password" type="text" placeholder="...."/>
            <CoolButton>Button</CoolButton>
            </form>
        </div>
    );



}



export default Signup