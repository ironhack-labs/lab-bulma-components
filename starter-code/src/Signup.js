import React, { Component } from 'react';
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton"

export default class signup extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Navbar>

         <CoolButton></CoolButton> 
        </Navbar>
        <FormField></FormField>

      </div>
    )
  }
}
