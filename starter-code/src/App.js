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
  brand,
  Icon,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
  Field,
  Control,
  Label,
  Input,
  Notification,
  Message,
  MessageHeader,
  Delete,
  MessageBody
} from "bloomer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Navbar>
          <NavbarBrand>
            <NavbarItem>
              <img src="/images/bulma.png" alt="bulma" class="bulma-icon" />
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <Icon className="fa fa-github" />
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu onClick={this.onClickNav}>
            <NavbarStart>
              <NavbarItem href="#/">Home</NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem
                href="https://github.com/AlgusDark/bloomer"
                isHidden="touch"
              >
                <Icon className="fa fa-github" />
              </NavbarItem>
              <NavbarItem href="https://twitter.com/AlgusDark" isHidden="touch">
                <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
              </NavbarItem>
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
