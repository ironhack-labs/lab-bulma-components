import React from 'react';
import Signup from "../signup/Signup";
import Message from "../message/Message";
import 'bulma/css/bulma.css';

const Container = () => {
    return (
        <div className="container">
            <Signup />
            <Message />
        </div>
    );
};

export default Container;