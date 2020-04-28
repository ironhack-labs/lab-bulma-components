import React, {Component} from 'react';
import "bulma/css/bulma.css";
import './Signup.css'
import FormField from '../formfield/FormField';
import NavBar from '../navbar/Navbar';
import CoolButton from '../coolButton/CoolButton';

class Signup extends Component{

    render(){
        return(
            <div>
            <NavBar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. ******" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton> 
            </div>
        );
    }

}

export default Signup;