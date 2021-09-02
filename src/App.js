import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formField/FormField";

const App = () => {
  return (
    <main>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g XXX Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </main>
  );
};

export default App;
