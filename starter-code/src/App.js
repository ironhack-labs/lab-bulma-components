import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import Formfield from "./Formfield/Formfield";

export default class App extends React.Component {
  constructor() {
    super();
    this.formfields =[
      {
        set: "Name", 
        placeholder: "e.g Alex Smith"
      },
      {
        set: "Email", 
        placeholder: "e.g. alexsmith@gmail.com"
      }
    ]

  }

  render() {
    return (
      <div>
        <div id="nav">
          <Navbar></Navbar>
          {this.formfields.map((formfield, i) => (<Formfield key={i} label={formfield.set} type="text" placeholder={formfield.placeholder}></Formfield>))}       
          </div>
      </div>
    );
  }
}
