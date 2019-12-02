import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import FormField from "./components/form.js";
import CoolButton from "./components/Button.js";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <Navbar className="gray-nav"></Navbar>

      <FormField 
      label="Name" 
      type="text" 
      placeholder="e.g Alex Smith" 
      />

      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton className="button is-rounded my-class is-danger is-small">
        Button 1
      </CoolButton>
      <CoolButton className="button is-small is-success">Button 2</CoolButton>
    </div>
  );
}

export default App;

// SIGN UP CHECK - how do I render the signup page? //
// function App() {
//   return (
//     <div>
//       <Navbar></Navbar>

//       <FormField label="Username" type="text" placeholder="e.g Alex07" />
//       <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
//       <FormField label="Password" type="password" />

//       <CoolButton className="button is-rounded my-class is-danger is-small">Signup</CoolButton>

//     </div>
//   );
// }

// export default App;
