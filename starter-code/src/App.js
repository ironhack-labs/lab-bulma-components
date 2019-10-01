import React from "react";
import Form from "./Form";
import Button from "./Button";
import Nav from "./Nav";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Form label="Name" type="text" placeholder="e.g Christopher Bolivar" />
        <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <Button className="button is-rounded  is-danger is-small" >Button1</Button>
      <Button className="button is-success is-small" >Button2</Button>

      <h1>Iteration 4:</h1>
      <Signup />
    </div>
  );
}

export default App;
