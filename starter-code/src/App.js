import React, {Component} from "react";
import "bulma/css/bulma.css";
import FormField from "./Formfield.js";
import CoolButton from "./CoolButton.js";
import Signup from "./Signup.js";
import Message from "./Message.js";
import "./App.css";


class App extends Component {
  render() {

    return ( 

      <section>
        <div>
          <Message title="Bonsoir" text="Bienvenue sur React" />
        </div>

        <nav>
          <a>Home</a>
          <a><CoolButton name="login" className="button is-rounded my-class is-danger is-small" /></a>
          <a><CoolButton name="signup" className="button is-small is-success" /></a>

        </nav>

        <div className="center-c">
          <FormField label="Name" type="text" placeholder="Put your name here" />
          <FormField label="Email" type="email" placeholder="Put your email here" />
        </div>

        <div>
        <Signup />
        </div>

      </section>

    );  
  }
}


export default App;