import React, { Component } from 'react';
import FormField from './FormField';
import Navbar from './Navbar';
import CoolButton from './CoolButton';
import Container from './Container';
import Message from './Message';


export default class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Message isInfo title="Hello World">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                    </Message>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="* * * *" />
                    <CoolButton isSmall isSuccess className="is-rounded my-class">Submit</CoolButton>
                </Container>
            </div>
        )
    }
}