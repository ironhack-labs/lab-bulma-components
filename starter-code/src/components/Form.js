import React, { Component } from "react";
import "../App.css";
import FormField from "./FormField.js";

class Form extends Component {
  render () {
    const { items, id } = this.props;
    return (
      <form id={id}>
        {
          items.map((item, index) => {
            return <FormField key={index} label={item.label} type={item.text} placeholder={item.placeholder} />
          })
        }
      </form>
    )
  }
}

export default Form;