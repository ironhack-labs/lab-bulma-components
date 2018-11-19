import React, {Component} from 'react';
import Nav from "./Nav";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
    render(){
        return(
            <div>
                <Nav />
                <FormField lName="Name" iType="text" iName="name" placeholder="Ximena Pérez"/>
                <FormField lName="Email" iType="email" iName="mail" placeholder="ximena@ironhack.com"/>
                <FormField lName="Password" iType="password" iName="password" placeholder="password"/>
                <CoolButton bName="Signup" bClass="button is-success"/>
            </div>
        )
    }
}

export default Signup;