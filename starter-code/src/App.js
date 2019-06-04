import React, {Component} from "react";
import "../public/App.css";
import 'bulma/css/bulma.css';
import Navbar from "../components/navbar"
import FormField from "../components/FormField"

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <FormField />
      </div>
    );
  }
}

export default App;