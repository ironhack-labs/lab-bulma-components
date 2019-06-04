import React, { Component } from "react";

import 'bulma/css/bulma.css'


import Navbar from "../components/navbar"
import FormField from "../components/FormField"
import CoolButton from "../components/CoolButton"
import Signup from "../components/Signup"




class App extends Component {

  render() {

    const navbar = {
      logo: 'images/bulma-logo.png',
      home: 'home',
      login: 'login',
      signup: 'signup'
    }

    const formField = {
      label: ['Name', 'Email'],
      type: ['text', 'email'],
      placeholder: ["e.g Alex Smith", "e.g. alexsmith@gmail.com"]
    }

    const coolButton = {
      name: ['button1', 'button2'],
      class: ['button is-danger is-rounded', 'button is-success'],
    }

    const signup = {
      logo: 'images/bulma-logo.png',
      home: 'home',
      login: 'login',
      signup: 'signup',

      label: ['Name', 'password'],
      type: ['text'],
      placeholder: ["nombre", "constrasenha"]
    }



    return (
      <div>

        <Navbar logo={navbar.logo} home={navbar.home} login={navbar.login} signup={navbar.signup} />

        <form>
          <FormField label={formField.label[0]} email={formField.type[0]} placeholder={formField.placeholder[0]} />
          <FormField label={formField.label[1]} email={formField.type[1]} placeholder={formField.placeholder[1]} />
        </form>

        <div>
          <CoolButton name={coolButton.name[0]} class={coolButton.class[0]} />
          <CoolButton name={coolButton.name[1]} class={coolButton.class[1]} />
        </div>

        <div>
          <Signup
            logo={signup.logo} home={signup.home} login={signup.login} signup={signup.signup}
            label={signup.label} type={signup.type} placeholder={signup.placeholder}
          />
        </div>

      </div>

    )

  }
}


export default App