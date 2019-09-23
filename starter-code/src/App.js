import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import SignUp from "./SignUp";
import Message from "./Message";

const App = () => {
    return (
        <div>
      <SignUp />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
    
    );
};

export default App;
