import React from 'react';
import "./Container.css";
import 'bulma/css/bulma.css';
import Signup from '../signup/Signup';
import Message from '../message/Message';

const Container = () => {
    return (
        <div className="container">
            <Signup />
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </div>
    )
}

export default Container; 