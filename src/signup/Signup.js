import 'bulma/css/bulma.css';
import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import Container from '../container/Container'

const Signup = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="Type your password" />
                <CoolButton isSuccess isRounded>Submit</CoolButton>
            </Container>
        </div>
    )
}

export default Signup
