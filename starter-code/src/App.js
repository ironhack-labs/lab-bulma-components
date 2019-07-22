import React, { Component } from "react";
import "./App.css";
import Header from './components/Header'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'
import Message from './components/Message'

class App extends Component {

  render() {

    const signup = (
      <Signup />
    )

    const message = (
      <div>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
        <Message title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
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
        {message}
      </div>
    );
    return (
      app
    );
  }
}

export default App;