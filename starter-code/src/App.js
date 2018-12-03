import React from "react";
import NavBar from './components/NavBar';
import FormField from './components/FormField';

export default class App extends React.Component {
  render() {
      return (
        <div>
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      )
  }
}
