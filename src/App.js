import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from "./components/NavBar"
import FormField from "./components/FormField"
import CoolButton from "./components/CoolButton"
import Signup from "./components/Signup"

const App = () => {
  return (
    <main className = "fondo">
        <NavBar/>
      <section>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <CoolButton className="button is-rounded my-class is-danger is-small" name="Button 1" />
        <CoolButton className="button is-small is-success" name = "Button 2" />
      </section>

      <section className="signup">
        <hr></hr>
        <Signup/>
      </section>


    </main>
  )
};

export default App;
