import React, { Component } from "react";

const CoolButton = (props) => {
 
  return (
    <div>
      <button class={props.class}>{props.buttonlabel}</button>
    </div>
  );
};

export default CoolButton;




// const CoolButton = (props) => {
//   const classesArr = [];
//   if (props.isSmall) classesArr.push("is-small");
//   if (props.className) classesArr.push(props.className);

//   exclamationText = ""
//   if (props.isDanger) exclamationText = "!!!!!!!"

//   return (
//     <div>
//       <button className={classesArr.join("")}>{exclamationText} {props.buttonlabel}</button>
//     </div>
//   );
// };


