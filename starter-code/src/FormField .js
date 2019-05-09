import React, { Component } from "react";

class FormField extends Component {
  render(props) {
    return (
      <div class="field">
        <label class="label">{this.props.label}</label>
        <div class="control">
          <input
            class="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

// function FormField(props) {
//   return (
//     <div class="field">
//       <label class="label">{props.label}</label>
//       <div class="control">
//         <input
//           class="input"
//           type={props.type}
//           placeholder={props.placeholder}
//         />
//       </div>
//     </div>
//   );
// }

export default FormField;
