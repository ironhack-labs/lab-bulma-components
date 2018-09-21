import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import {
  Container,
  Button,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Field,
  Control,
  Label,
  Input,
  Message,
  MessageHeader,
  Delete,
  MessageBody
} from "bloomer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand>
            <NavbarItem>
              <img src="/images/bulma.png" alt="bulma" class="bulma-icon" />
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu onClick={this.onClickNav}>
            <NavbarStart>
              <NavbarItem href="#/">Home</NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <Field isGrouped>
                  <Control>
                    <Button isSmall isColor="info">
                      Login
                    </Button>
                    <Button isSmall isColor="primary">
                      Sign up
                    </Button>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
        <form class="formulari">
          <Field>
            <Label>Name</Label>
            <Control>
              <Input type="text" placeholder="e.g Alex Smith" />
            </Control>
          </Field>
          <Field>
            <Label>Email</Label>
            <Control>
              <Input type="text" placeholder="e.g. alexsmith@gmail.com" />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input type="password" placeholder="1234" />
            </Control>
          </Field>
          <Button isSmall isColor="info">
            Sign up
          </Button>
        </form>
        <Container>
          <Message>
            <MessageHeader>
              <p>Hello World</p>
              <Delete />
            </MessageHeader>
            <MessageBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Pellentesque risus mi</strong>
            </MessageBody>
          </Message>
        </Container>
      </div>
    );
  }
}

export default App;
