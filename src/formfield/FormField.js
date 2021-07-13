import React from "react";
import "./FormField.css";

// function FormField() {
//   return (
//     <div>
//       <div className="field">
//         <label className="label">Name</label>
//         <div className="control">
//           <input className="input" type="text" placeholder="e.g Alex Smith" />
//         </div>
//       </div>
//       <div className="field">
//         <label className="label">Email</label>
//         <div className="control">
//           <input
//             className="input"
//             type="email"
//             placeholder="e.g. alexsmith@gmail.com"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div class="control">
        <input class="input" type="text" placeholder={props.placeholder} />
      </div>
    </div>
  );
};
export default FormField;
