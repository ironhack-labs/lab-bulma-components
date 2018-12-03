import React, {Component} from "react";
import ReactDOM from "react-dom";
import Nav from "../src/components/navbar/nav.js";
import Form from "../src/components/form/form.js";
import CoolBtn from "../src/components/btn/btn.js";



class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Form />
        <CoolBtn />
       </div>
    );
  }
}

export default App;