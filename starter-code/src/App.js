import React from "react";
import FormField from "./components/FormField/FormField";
import Navbar from "./components/Navbar/Navbar";
import CoolButton from "./components/CoolButton/CoolButton";
import Container from "./components/Container/Container";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Container>
          <Navbar />
          <div className="buttons-container">
            <CoolButton isSmall isDanger className="is-rounded my-class">
              Button 1
            </CoolButton>
            <CoolButton isSmall isSuccess>
              Button 2
            </CoolButton>
          </div>
          <div className="columns">
            <div className="column">
              <Login />
            </div>
            <div className="column">
              <Signup />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
