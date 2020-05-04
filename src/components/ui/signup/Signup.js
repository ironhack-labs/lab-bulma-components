import React from 'react';
import './Signup.css'
import 'bulma/css/bulma.css';
import Header from '../header/Header'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import Message from '../message/Message'

const Signup = () => {
    return (
        <>
            <Header />
            {/* <form action=""> */}
                <FormField label="Name" type="text" placeholder="Name"></FormField>
                <FormField label="Email" type="email" placeholder="Email"></FormField>
                <FormField label="Password" type="password" placeholder="Password"></FormField>
                <CoolButton className="button is-black" text="Submit" />
                <Message className="message is-success" title="Hello World" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem." />
            {/* </form> */}
        </>
    )
}

export default Signup