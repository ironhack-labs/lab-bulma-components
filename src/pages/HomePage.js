import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "../navbar/Navbar";
import HomeForm from "../forms/HomeForm";

class HomePage extends Component {
  render(){
    return (
      <div id="homepage">
        <Navbar/>
        <HomeForm/>
      </div>
    );
  }
}

export default HomePage