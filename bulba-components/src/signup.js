import React from 'react';
import Navbar from "./Navbar.js"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import Message from "./Message"


function Signup(props) {
    return (
        <>
            <Navbar />
            <div class="margin">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="Password" placeholder="***********" />
                <CoolButton className="button is-rounded my-class is-danger is-small" isSmall="" text="Button 1"></CoolButton>
                <CoolButton className="button is-small is-success" isSmall="" text="Button 2"></CoolButton>
                <Message isInfo
                    title="Hello World"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    strong="Pellentesque risus mi"
                    />
            </div>

        </>
    )
}
export default Signup;
