import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css';
import App from "./App.js";
import Navbar from "./components/navbar";

ReactDOM.render(
    <div>
        <Navbar/>
        <App/>
    </div>,
    document.getElementById("root")
);