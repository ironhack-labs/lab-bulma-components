import React from "react";
import CoolButton from "./CoolButton";


let buttons = [
  {
    nameButton: "Singup",
    classs: "button is-rounded my-class is-danger is-small"
  },
  {
    nameButton: "Login",
    classs: "button is-rounded my-class is-danger is-small"
  }
];

export const ListButtons = () => {
  return buttons.map((b, index) => {
    <CoolButton
    key={index}
    nameButton= {b.nameButton}
    classs= {b.classs}
    />
  });
};
