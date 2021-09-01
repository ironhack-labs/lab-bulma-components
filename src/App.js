import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./navbar/NavBar";
import FormField from "./Formfield/FormField";
import CoolButton from "./CoolButton/CoolButton";
import Signup from "./Signup/Signup";
import Message from "./Message/Message";
import Container from "./Container/Container";

const App = () => (
  <div>
    {/* <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField
      label="Email"
      type="email"
      placeholder="e.g. alexsmith@gmail.com"
    />
    <div className="button-form">
      <CoolButton shape="is-rounded" color="is-success" myClass="centered">
        Submit
      </CoolButton>
    </div> */}
    <Signup />
    <Container>
      <Message
        color="is-danger"
        title="Evidencias"
        text="Chega de mentiras, de negar o meu desejo, eu te quero mais que tudo, eu preciso do seu beijo..."
        width="500px"
      />
    </Container>
  </div>
);

export default App;
