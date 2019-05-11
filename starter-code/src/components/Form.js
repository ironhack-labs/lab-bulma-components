import React, { Component } from "react";
import FormField from "../components/FormField";

class Form extends Component {
  render() {
    const { children } = this.props;

    return <form action="">{children}</form>;
  }
}

export default Form;
