import React, { Component } from "react";
// import Navbar from "./components/Navbar.js";
// import FormField from "./components/FormField.js";
// import CoolButton from "./components/CoolButton.js";
// import Signup from "./components/Signup.js";
import Container from "./components/Container.js";
//Dejo comentado todo el codigo de los puntos por lo que he ido avanzando a lo largo de la learning
class App extends Component {
  render() {
    return (
      <Container />
      // <Signup/>
      //       <div>
      //         <Navbar />
      //         <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      //         <FormField
      //           label="Email"
      //           type="email"
      //           placeholder="e.g. alexsmith@gmail.com"
      //         />
      //         <CoolButton className="button is-small is-danger  is-rounded my-class">Button 1</CoolButton>
      // <CoolButton className="button is-small is-success">Button 2</CoolButton>
      //       </div>
    );
  }
}

export default App;
