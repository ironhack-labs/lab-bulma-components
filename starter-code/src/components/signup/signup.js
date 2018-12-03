import React from "react";
import Nav from "../navbar/nav.js";
import Form from "../form/form.js";
import CoolBtn from "../btn/btn.js";

class Signup extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="signup">
        <Nav />
        <Form />
        <CoolBtn />
      </div>
    );
  }
}
export default Signup;
