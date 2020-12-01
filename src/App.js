import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Sign up Page</h1>
      <form>
        <FormField label="Name" type="text" />
        <FormField label="Email" type="email" />
        <FormField label="Password" type="password" />
        <CoolButton class="button is-small is-success" name="Sign up" />
      </form>
    </div>
  );
};

export default App;
