import React from 'react';
import './CoolButton.css'


const CoolButton = (props) => {

    let classList = "button";
    if (props.isDanger) {
        classList += " is-danger"
    }
    if (props.isSuccess) {
        classList += " is-success"
    }
    if (props.isSmall) {
        classList += " is-small"
    }
    if (props.isRounded) {
        classList += " is-rounded"
    }
    

  return (
    <button className={classList}>Button 1</button>
  );
};

export default CoolButton;


// const CoolButton = (props) => {

//     let classList = "button is-rounded my-class is-small";
//     if (props.isDanger) {
//       classList += " is-danger"
//     }
  
//     return (
//       <button className={classList}>Button 1</button>
//     );
//   };