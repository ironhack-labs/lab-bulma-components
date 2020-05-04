import React from 'react';
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js"
import CoolButton from "./CoolButton/CoolButton.js"
import Message from "./Message/Message.js"

class Container extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
                <Message isInfo title='Hello World'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
            </>
        )
    }
};

export default Container;