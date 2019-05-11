import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import FormField from "../components/FormField";
import CoolButton from "./CoolButton";

class SignUp extends Component {
  state = {
    nameField: {
      label: "Name",
      type: "text",
      placeHolder: "e.g Alex Smith"
    },
    emailField: {
      label: "email",
      type: "email",
      placeHolder: "e.g. alexsmith@gmail.com"
    },
    passwordField: {
      label: "password",
      type: "password",
      placeHolder: "e.g. nJZFy&L*JWvH"
    }
  };

  render() {
    const { nameField, emailField, passwordField } = this.state;
    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <div className="box">
                  <Form>
                    <FormField {...nameField} />
                    <FormField {...emailField} />
                    <FormField {...passwordField} />
                    <CoolButton isPrimary isMedium isFullwidth>
                      Sign me Up!!
                    </CoolButton>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;
