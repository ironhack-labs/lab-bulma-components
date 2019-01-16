import React from "react";
import FormField from "./FormField";

const parameters = [
  {
    Name:"Name",
    type:"text",
    placeholder:"e.g Alex Smith"
  },
  {
    Name: "Email",
    type: "email",
    placeholder: "e.g. alexsmith@gmail.com"
  }
];

export const ListForms = () => {
  return (
    <ul>
      {parameters.map((oneBox,i) => (
        <FormField
          key={i}
          Name={oneBox.Name}
          type={oneBox.type}
          placeholder={oneBox.placeholder}
        />
      ))}
    </ul>
  );
};
