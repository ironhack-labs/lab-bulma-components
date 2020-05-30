import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import "bulma/css/bulma.css";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Jonathan Smith"
        />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </form>
    </div>
  );
};

export default App;
