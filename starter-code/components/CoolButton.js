import React, { Component } from "react";

// class CoolButton extends Component {

//   render(props) {
//     console.log(props);
//     return(
//       <div className="CoolButton">
//         <button className={props.className}>{}</button>
//       </div>
//     )

//   }
// }

function CoolButton(props) {
  console.log(props);

  return(
    <div className="CoolButton">
      <button className={props.className}>{props.children}</button>
    </div>
  )
}

export default CoolButton;