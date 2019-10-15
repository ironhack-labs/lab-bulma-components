import React, {Component} from "react";

import Navbar from './Navbar';
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <form>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="text" placeholder="your password here" />
                    <CoolButton isSmall isDanger>Submit</CoolButton>
                </form>
            </div>
        )
    }
}

export default Signup;