import React, {Component} from "react";
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component{
    render(){
        return (
            <div >
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Analin Flores" />
                <FormField label="Email" type="email" placeholder="foglzerika@gmail.com"/>
                <FormField  label="Password" type="password" />
                <CoolButton isSmall isDanger isRounded value="Send"/>
            </div>
            

        )
    }
}

export default Signup;