import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Form from "./components/form/Form";
import Button from "./components/coolButton/CoolButton";
import SignUp from "./components/signUp/signUp";
import Container from "./components/container/Container"


function App() {

  return (
    <>
      <Nav />
      <Form label="Name" type="text" placeholder="e.g Alex Smith" />
      <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <Button
        isSmall
        isDanger
        className="button is-rounded my-class"
        name="Boton 1"
      />
      <Button isSmall isSuccess className="button" name="Boton 2" />

      <hr />
      <SignUp />
      <hr/>
      <Container title="Hi world!" />
    </>
  );
}

export default App;
