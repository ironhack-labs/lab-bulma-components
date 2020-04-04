import React, { Component } from "react";
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField'

class HomeForm extends Component {
  render(){
    return (
      <form className="form" action="" method="">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </form>
    );
  }
}

export default HomeForm