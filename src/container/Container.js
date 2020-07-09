import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import Signup from '../signup/Signup';
import Message from '../message/Message';

class Container extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="formDiv">
                    <FormField
                        label="Name"
                        type="text"
                        placeholder="e.g Alex Smith"
                    />
                    <FormField
                        label="Email"
                        type="email"
                        placeholder="e.g alexsmith@gmail.com"
                    />
                </div>
                <Signup />
                <Message
                    title="Hello World"
                />
            </div>
        )
    }
}

export default Container;