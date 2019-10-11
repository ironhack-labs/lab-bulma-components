import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navbar";
import FormField from "./components/formfield.js";
import CoolButton from "./components/coolbutton";
import Message from "./components/message";
import Signup from "./components/signup";

//https://www.agiliq.com/blog/2018/05/understanding-react-state-and-props/#understanding-reactjs-props

class App extends Component {


  render() {

    const awesome = <img src='/images/awesome.png' />


    return (  //jsx element, jsx returned from display function

      <div className="App">
       <Nav />
       <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
       <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
       <CoolButton isSmall isDanger  className="is-rounded my-class">Button 1</CoolButton>
       <CoolButton isSmall isSuccess>Button 2</CoolButton>
       <Message isInfo title="Hello World">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>

      <Signup/>
     
      </div>


    );
  }
}

export default App;