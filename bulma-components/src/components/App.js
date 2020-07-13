import React from 'react';
import './App.css';
import Navbar from "../components/navbar/Navbar"
import FormField from "../components/formfield/FormField"
import Signup from "../components/signup/Signup"
import Container from "../components/container/Container"

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="form-container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      </section>
      <Signup />
      <Container />
    </div>
  );
}

export default App;
