import React, {Component} from "react";
import NavBar from "./Navbar.js"
import FormField from "./Formfield.js";
import CoolButton from "./Coolbutton.js";

class SignUp extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="e.g. *****" />
                <FormField label="blbla" type="submit" placeholder="e.g. *****" />
                <CoolButton isSmall isSuccess value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignUp;