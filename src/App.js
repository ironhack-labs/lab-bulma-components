import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./src/formfield/FormField";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" placeholder="e.g. Alex Smith" />
      <FormField label="Email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
};

export default App;
