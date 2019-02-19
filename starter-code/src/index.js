// "import" is the official JS syntac that's like the Node.js "require"
// (doesn't work on browsers yet though)
import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";

import App from "./App.js";

// HTML in JS WITHOUT a string -> JSX syntax
ReactDOM.render(<App />, document.getElementById("root"));
