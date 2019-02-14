import React, { Component } from "react";
// import "./App.css";
import Navbar from "../components/Navbar.js";
import FormField from "../components/FormField.js";
import CoolButton from "../components/CoolButton.js";

class App extends Component {
  // state = {
  //   userA: {
  //     firstName: "Harper",
  //     lastName: "Perez",
  //     avatarUrl:
  //       "http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png"
  //   },
  //   userB: {
  //     firstName: "Ana",
  //     lastName: "Hello",
  //     avatarUrl:
  //       "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
  //   },
  //   clickCount: 0,
  //   backColor: "yellow"
  // };

  // colorMapper = () => {
  //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // };

  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}

export default App;
