import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar"
import Signup from "./Signup"
import Message from "./Message"

/* import Formfield from "./Formfield"
import Coolbuttons from "./Coolbuttons" */


class App extends Component {


  render() {

    const userInfo = {
      name: "Weirdo",
      email: "Fai@gmail.com"
    }

    return (
      <div className="App">

        <Navbar />
        <Signup userInfo={userInfo} />
        <Message userInfo={userInfo} />

      </div>
    );
  }
}

export default App;