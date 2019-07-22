import React, { Component } from "react";

// class FormField extends Component {

//   render() {

//     return(
//         <div class="field">
//           <label className="label"></label>
//           <div class="control">
//             <input class="input"></input>
//           </div>
//         </div>
//     )

//   }
// }

function FormField(props) {
  return(
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type={props.text} placeholder={props.placeholder}></input>
      </div>
    </div>
  )
}

export default FormField;