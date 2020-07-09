import 'bulma/css/bulma.css';
import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import Container from '../container/Container'
import Message from '../message/Message';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="Type your password" />
                <CoolButton isSuccess isRounded>Submit</CoolButton>
                <Message isInfo title='Hello World'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </Container>
        </div>
    )
}

export default Signup
