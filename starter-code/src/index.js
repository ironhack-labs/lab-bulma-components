//import == require
import React from "react";
import ReactDOM from "react-dom";

// App is a React component - it is the outermost, biggest component (the entire application)
import App from "./App.js";
import 'bulma/css/bulma.css';

ReactDOM.render(
  // render our component into a DOM element
  <App />,
  document.getElementById("root") //root--> see html root div (body: the <div id="root"></div>  is the root for our React app. We also add a a <script src="../dist/bundle.js"></script> that references our built React app.)
);