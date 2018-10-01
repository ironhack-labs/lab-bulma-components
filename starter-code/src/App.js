import React from "react";
import { Navbar } from "./navbar.js";
import { Form } from "./form.js";
import { Button } from "./button.js"

const App = () => {
  return (
    <div>
      <Navbar />
      <Form label="Name" placeHolder="e.g Alex Smith" />
      <Form label="Email" placeHolder="e.g. alexsmith@gmail.com" />
      <Button />
    </div>
  )
}

export default App;
