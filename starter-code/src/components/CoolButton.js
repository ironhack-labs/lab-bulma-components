import React, { Component } from "react";

const CoolButton = ({ isSmall, isDanger, className, isSuccess, children}) => {
  let classNameB = "button ";
  if(isSmall) classNameB += "is-small ";
  if(isDanger) classNameB += "is-danger ";
  if(className) classNameB += "is-rounded my-class ";
  if(isSuccess) classNameB += "is-success ";
  console.log(classNameB)
  return (
    <a class={classNameB}>{children} </a>
  );
};

export default CoolButton;
