import React, { Component } from "react";
import NavBar from "./Navbar";
import FormField from "./FormField";
import { inputprops, buttons, classes } from "./props";

class Signup extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <form className="container">
          {inputs(inputprops)}
          {buttons(
            [classes.isLarge, classes.isOutlined, classes.isSuccess],
            "Submit"
          )}
        </form>
      </div>
    );
  }
}

const inputs = props => {
  return props.map(e => (
    <FormField name={e.name} type={e.type} placeholder={e.placeholder} />
  ));
};
export default Signup;
