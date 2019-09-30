import React from "react";
import NavBar from './NavBar';
import FormField from './FormField';
import CoolButton from './CoolButton';

export default class Signup extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <NavBar></NavBar>
      <FormField></FormField>
      <CoolButton className="button is-success" text="Send"></CoolButton>
      </div>
    )
  }
}