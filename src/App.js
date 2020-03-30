import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import Message from './message/Message';
import CoolButton from './CoolButton';
import Signup from './signup/Signup';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
     return (
       <Router>
      <div>
        <Navbar button={
          <div>
            <Link to="/signup"><CoolButton isInfo>Signup</CoolButton></Link>
            <Link to="/"><CoolButton className="button is-primary">Login</CoolButton></Link>
          </div>
        } />

        <Switch>
        <Route exact path="/">
        <Formfield label="name" type="text" placeholder="Raúl Marchán" />
        <Formfield label="mail" type="email" placeholder="r.marchan@mail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
        
        </Route>
        <Route exact path="/signup">
        <Formfield label="name" type="text" placeholder="Raúl Marchán" />
        <Formfield label="mail" type="email" placeholder="r.marchan@mail.com" />
        <Formfield label="password" type="password" placeholder="" />
        <CoolButton isSmall isInfo>Submit</CoolButton>
        </Route>
        </Switch>


      </div>
      </Router>
      )
  }
};

export default App;
