import React, { Component } from "react";
import "./App.sass";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import FormField from "./components/FormField";
import {CLASSES} from "./Bulma_Classes";
import CoolButton from "./components/CoolButton";
import Message from "./components/Message";
import Signup from "./components/Signup";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Signup/>

        <Container className="secondSection">
          {/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess text="Button 2">Button 2</CoolButton> */}
          {Object.keys(CLASSES).map((e, i)=> {
            return (
                <CoolButton key={i} {...{[e]:true}} className={i%2 === 0 ? "is-rounded " : ""}>
                  Button {(i < 9 ? "0" + (i + 1) : (i + 1))}
                </CoolButton>
              );
            })
          }
        </Container>

        <Container className="thirdSection">
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </div>
    );
  }
};
