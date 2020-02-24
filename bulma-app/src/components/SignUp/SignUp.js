import React from 'react';
import Navbar from '../navbar/Navbar'
import FormField from '../form/FormField'
import CoolButton from '../CoolButton/CoolButton'
import Message from '../Message/Message'

function SignUp() {
    return (
        <>
            <Navbar />
            <div className="columns is-vcentered">
                <div className="column">
                    <div className="container form">
                        <form action="#">
                            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                            <FormField label="Password" type="password" placeholder="Enter your password" />
                            <CoolButton isCentered isBlack className="is-rounded my-class">Sign Up</CoolButton>
                        </form>
                    </div>
                </div>
                <div className="column">
                    <Message isInfo title="Hello World">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                    </Message>
                </div>
            </div>
        </>
    )
}

export default SignUp;