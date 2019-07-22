import React, { Component } from "react";
import "./App.css";
import Header from './components/Header'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'

class App extends Component {

  render() {

    const signup = (
      <Signup />
    )

    // const header = (
    //   <Header />
    // );

    // const forms = (
    //   <div>
    //     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    //     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    //   </div>
    // );

    // const buttons = (
    //   <div>
    //     <CoolButton isSmall isDanger className="is-rounded my-class">Botao 1</CoolButton>
    //     <CoolButton isSmall isSuccess>Botao 2</CoolButton>
    //   </div>
    // );

    const app = (
      <div className="App">
        {/* {header}
        {forms}
        {buttons} */}
        {signup}
      </div>
    );
    return (
      app
    );
  }
}

export default App;