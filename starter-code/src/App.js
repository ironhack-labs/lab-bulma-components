import React, { Component } from "react";
import Navbar from "./Navbar";
import Formfield from "./Formfield";
import CoolButton from "./CoolButton";
import Mensage from "./Mensage"
import "./App.css";


class App extends Component {

  render() {
    let obj = {
      name : 'something',
      text : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque risus mi',
    }
    return (
      <div>
        <Navbar />
        <Formfield />
        <CoolButton name={obj.name}/>
        <Mensage text={obj.text} />
      </div>
    );
  }
}  
        
export default App;