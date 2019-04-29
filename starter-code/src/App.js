
import React, { Component } from "react";
import  Navbar from "./SignUp";
import CoolButton from "./CoolButton";
import Message from "./Message";

class App extends Component {

    render() {


        return(
            <div>
                <Navbar ></Navbar>    
                <Message isInfo title="Hello World Teste">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
                
            </div>
        );
    }
  }
  
  export default App;