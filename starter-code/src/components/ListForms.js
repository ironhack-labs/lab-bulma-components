import React, { Component } from "react";
import FormField from "./components/FormField";

class ListForms extends Component {
  render() {
    const Parameters = [
      {
        Name: "Name",
        type: "text",
        placeholder: "e.g Alex Smith"
      },
      {
        Name: "Name",
        type: "email",
        placeholder: "e.g. alexsmith@gmail.com"
      }
    ];

    export const ParametersList = () => {
      return (
        <ul>
          {Parameters.map((oneBox, index) => (
            <FormField
              key={index}
              Name={oneBox.Name}
              type={oneBox.type}
              placeholder={oneBox.placeholder}
            />
          ))}
        </ul>
      );
    };
  }
}
