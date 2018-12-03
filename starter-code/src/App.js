import React from "react";
import Signup from "./components/Signup/Signup.js";
import Message from "./components/Message/Message.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Signup />
                <Message isInfo title="Hello World">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </div>
        );
    }
}

export default App;