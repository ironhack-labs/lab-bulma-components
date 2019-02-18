import React from "react";
import NavBar from '../NavBar/NavBar'
import FormField from '../FormField/FormField'
import CoolButton from '../CoolButton/CoolButton'

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <form>
                    <FormField label="Name" type="text" placeholder="Your Name" />
                    <FormField label="Email" type="email" placeholder="Your Email" />
                    <FormField label="Password" type="password" placeholder="Your Password" />
                    <CoolButton isBlack className="myButton">Log in</CoolButton>
                </form>
            </div>
        )
    }
}

export default SignUp;