import React from 'react';
import ReactDom from 'react-dom';

import "bulma/css/bulma.css";

import Navbar from './Navbar';
import FormField from './FormField';
import Message from './Message';

const SignupForm = () => {
    return (
        <div>
            <Navbar />
            <section>
                <form action="/signup" method="post">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="e.g. Pa12345678" />
                    <input className="button is-primary" type="submit" value="Submit"/> 
                </form>
                <Message isInfo title="Hello World">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <strong>Pellentesque risus mi</strong>.
                </Message>
            </section>
        </div>
    );
};

export default SignupForm;