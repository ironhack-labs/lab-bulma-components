import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ListForms } from "./components/ListForms";
import { ListButtons } from "./components/ListButtons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="listForms">
          <ListForms />
        </div>
        {/* <ListButtons isSmall isDanger className="is-rounded my-class"/> */}
        
        
      </div>
    );
  }
}

export default App;
