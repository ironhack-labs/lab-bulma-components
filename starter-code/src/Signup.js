import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Container from "./Container";
import Message from "./Message";



class Signup extends React.Component {
    render() {
        return <Container>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="******" />
            <CoolButton className="is-rounded my-class is-danger is-small">Submit</CoolButton>
            <Message title="Hello World">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
        </Container>;
    };
}


export default Signup;