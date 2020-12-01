import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FormField label="Name" type="text" />
        <FormField label="Email" type="email" />
      </div>
    </div>
  );
};

export default App;
