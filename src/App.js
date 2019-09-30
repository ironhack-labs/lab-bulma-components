import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Container from "./Container";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import SignForm from "./SignForm"



function App() {
  return (
    <div className="App">
    <Navbar />
    <Container />
    {/* <SignForm/> */}
      {/* <Navbar />
      <div className="formbox">
        <FormField label="Name" type="text" placeholder="e.g. Alex Gonzalez" />
        <FormField
          label="Email"
          type="email"
          placeholder="alexgonzalez13@gmail.com"
        />
      </div>
      <CoolButton Button isSmall isDanger isRounded myClass href="#">
        Button 1
      </CoolButton>
      <CoolButton Button isSmall isSuccess href="#">
        Button 2
      </CoolButton> */}
    </div>
  );
}

export default App;
