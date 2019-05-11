import React from "react";

const CoolButton = props => {
  //For each uppercase letter, converts it to lowercase and inserts an hyphen before
  //this inline function is invoked for each match in the regular expression
  //Honestly taken from MDN
  function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
      return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  }

  const {children,className} = props;
  //extracting properties with a value equals to true
  const btnClasses=Object.keys(props).reduce((acc,prop)=>{
    if (props[prop] === true){
      acc.push(styleHyphenFormat(prop));
      return acc
    }else{
      return acc;
    }
  },[]).join(" ") //join all keys with an space so it can be used in className

  //Using || to return an empty string in case no classes where retrieved
  return <button className={`button ${btnClasses} ${className || ""}`}>{children}</button>;
};

export default CoolButton;
