import React, { Component } from "react";
import NavBar from "./components/NavBar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Message from "./components/Message";
import "../public/style.css";

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <NavBar />
        <form>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton className="button is-rounded my-class is-danger is-small" name="Button 1" />
            <CoolButton className="button is-small is-success" name="Button 1" />
        </form>
        <Message className="message is-info" title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, 
            tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. 
            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, 
            in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, 
            id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </Message>
        </React.Fragment>
        )
  }
}

export default App;