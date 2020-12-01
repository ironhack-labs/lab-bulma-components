import React from "react";
import "./CoolButton.css";

const CoolButton = (props) => {
    const {isRounded, isDanger, isSmall, text} = props;
    console.log(">>>>"+isRounded)
    //isRounded ? isRounded = "is-rounded" : null;
    // isDanger ? isDanger = "is-danger " : null;
    // isSmall ? isSmall = "is-small" : null;
  
    console.log(">>>>"+isRounded)
  return (
    <button class= {"button "+ 
        isRounded ? "is-rounded" : null + " " +
        isDanger ? "is-danger" : null + " " +
        isSmall ? "is-small" : null + " "
    }>{text}</button>
  );
};
export default CoolButton;
