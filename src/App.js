import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./navbar/Navbar.js";
import Main from "./Container.js"
import Signup from "./Signup.js"

const App = () => {
  return (
    <div id="main">
      <main>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/signup" component={Signup} />
        </Switch>
      </main>
    </div>
  )
};

export default App;
