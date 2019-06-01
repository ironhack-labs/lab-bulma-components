import React, {Component} from "react";
import Navbar from "./Navbar"
import FormField from "./Formfield"
import CoolButton from "./Coolbutton"
import Message from "./Message"
import Containeer from "./Containeer";


class SignUp extends Component {
    render() { 
         
        return (
            <Containeer>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="*******" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
                <Message isInfo title="Hello World">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
                </Containeer>
        )
    }
}
export default SignUp;