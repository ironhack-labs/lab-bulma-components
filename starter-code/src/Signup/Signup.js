import React from "react";
import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/formField";
import CoolButton from "./CoolButton/CoolButton";



//function Signup(props) {
export default class Signup extends React.Component {

    render() {
        return (
            <div className="Signup">
                <Navbar>
                </Navbar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="Password" placeholder="***********" />
                <CoolButton className="button is-small is-success" isSmall="" text="Submit">Submit</CoolButton>
            </div>
        )
    }
}
//export default Signup;
