import React from "react";
import Navbar from './Navbar';
import Form from './Form';
import Signup from './Signup';
import Container from './Container';
import Message from './Message';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Form></Form>
                <hr/>
                <Signup></Signup>
                <hr/>
                <Container>
                    <Message isInfo title="Hello World">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                    </Message>
                </Container>
            </div>
        )
    }
}

export default App;