import React from "react";
import Navbar from './Navbar';
import Form from './Form';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Form></Form>
            </div>
        )
    }
}

export default App;