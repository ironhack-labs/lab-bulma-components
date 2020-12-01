import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';

class SignUp extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <FormField
                        label = "Name:"
                        inputType = "text"
                        placeholder = "Enter your name"
                    />
                    <FormField
                        label = "Email"
                        inputType = "email"
                        placeholder = "Enter your email"
                    />
                    <FormField
                        label ="Password"
                        inputType = "password"
                        placeholder = "*******"
                    />

                    <CoolButton isSuccess>Sign up</CoolButton>
                </form>
            </div>
        )
    }
}


export default SignUp;