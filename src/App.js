// src/App.js
import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import React from "react";
import SignUpForm from "./components/SignupForm";

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "signup",
    };
  }
  render() {
    switch (this.state.value) {
      case "signup":
        return (
          <>
            <Navbar />
            <SignUpForm />
          </>
        );
      default:
        return (
          <>
            <Navbar />
            {/* <Navbar changeState={() => console.log(this)} /> */}
          </>
        );
    }
  }
  // changeState(newState) {
    // console.log(this, '<=== this')
    // console.log(newState, '<=== newState')
    // this.setState(newState)
// }
}

function App() {
  return (
    <div>
      <MainBody />
    </div>
  );
}
export default App;
