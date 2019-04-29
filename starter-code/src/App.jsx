import React from "react";
import Navbar from './Navbar';
import Form from './Form';
import Signup from './Signup';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Form></Form>
                <hr/>
                <Signup></Signup>
            </div>
        )
    }
}

export default App;