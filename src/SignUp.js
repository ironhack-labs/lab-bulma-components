import React from 'react'
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import Button from './Button/Button'
import 'bulma/css/bulma.css';

export const SignUp = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="Name"/>
            <FormField label="Email" type="email" placeholder=" Email@" />
            <FormField label="Password" type="password" placeholder=" Password" />
            <Button isSucess>Submit</Button>
        </React.Fragment>
        
    )
}
 
export default SignUp