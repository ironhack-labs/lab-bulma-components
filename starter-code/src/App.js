import React from "react";
// import NavBar from './components/NavBar/navBar';
// import FormField from './components/formField/formField';
// import CoolButton from './components/coolButton/coolButton';
import SignUp from './components/Signup/signup';
import Signup from "./components/Signup/signup";

export default class App extends React.Component {
  render() {
      return (
        <div>
        <Signup />
        {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="is-rounded my-class button is-small is-danger">Button 1</CoolButton>
        <CoolButton className="is-small button is-success">Button 2</CoolButton> */}
        </div>
      )
  }
}