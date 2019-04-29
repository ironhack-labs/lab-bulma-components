import React, { Component } from "react";
import Barra from './components/Navbar';
import Form from './components/Form';
import "./App.css";


class App extends Component {
  render() {
    return (
<div>
        <Barra />
        <Form />
      </div>
    );
  }
}

export default App;