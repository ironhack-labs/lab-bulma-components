import Navbar from '../navbar/navbar';
import FormField from '../formField/formField'
import coolbutton from '../coolButton/coolButton';
import Message from '../message/message';

import React, { Component } from "react";
import coolbutton from '../coolButton/coolButton';


class signup extends Component {

  render() {
    return (
      <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <coolbutton isSmall isDanger className="is-rounded my-class">Button 1</coolbutton>
      <coolbutton isSmall isSuccess>Button 2</coolbutton>
      </div>
    )}
}

export default signup;