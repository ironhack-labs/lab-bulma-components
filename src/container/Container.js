import React from 'react';
import 'bulma/css/bulma.css';
import Signup from '../signup/Signup';
import Message from '../message/Message';

const Container = () => {
    return (
        <>
            <Signup />
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </>
    )
}
export default Container;