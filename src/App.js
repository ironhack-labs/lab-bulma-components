import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import Navbar from "/src/navbar/navbar";
import Formfield from "/src/formfield/Formfield";
import CoolButton from "/src/CoolButton/CoolButton";
import Signup from "/src/Signup/Signup";
import Message from "/src/Message/Message";

const App = () => {
  return (
    <div>
      <Navbar />

      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton isSmall isPrimary isDanger isRounded>
        Button 1
      </CoolButton>
      <CoolButton isSmall isPrimary isSuccess>
        Button 2
      </CoolButton>

      <Signup />

      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
