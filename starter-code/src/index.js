import React from "react";
import ReactDOM from "react-dom";

// import Navbar from "./components/Navbar.js";
// import FormField from "./components/FormField.js";
// import CoolButton from "./components/CoolButton.js";
import Message from "./components/Message.js";
import Signup from "./components/Signup.js";

import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Signup />
<br />
        <Message  title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//isInfo