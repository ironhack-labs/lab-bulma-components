import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import SignUp from './components/SignUp';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SignUp/>
      </div>
    )
  }
}
