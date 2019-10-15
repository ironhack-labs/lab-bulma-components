import React, { Component } from "react";

const CoolButton = ({ isSmall, isDanger, className, isSuccess, children, isInfo, isPrimary, isRounded}) => {
  let classNameB = "button ";
  if(isSmall) classNameB += "is-small ";
  if(isDanger) classNameB += "is-danger ";
  if(className) classNameB += "my-class ";
  if(isSuccess) classNameB += "is-success ";
  if(isInfo) classNameB += "is-info ";
  if(isRounded) classNameB += "is-rounded";
  if(isPrimary) classNameB += "is-primary ";
  
  return (
    <a class={classNameB}>{children} </a>
  );
};

export default CoolButton;
