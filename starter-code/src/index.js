import React from "react";
import ReactDOM from "react-dom";
import {Navbar} from "./App.js";
import 'bulma/css/bulma.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
