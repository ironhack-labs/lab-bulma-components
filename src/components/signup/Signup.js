import React, { Fragment } from 'react';

import FormField from '../formfield/FormField';
import Nav from '../navbar/Nav';
import CoolButton from '../coolbutton/CoolButton';
import Container from '../container/Container';
import Message from '../mensagem/Message';

const Signup = () => 
    <>
        <Nav/>
        <Container>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="***********" />
            <CoolButton isActive isSuccess>Send</CoolButton>
        </Container>
        <Container>
            <Message isWarning title="Dupla: Rafael e Fabio">
                Esse é o nosso lab de React.
                Muito show!!!!
                É nós!
            </Message>
        </Container>
    </>

export default Signup