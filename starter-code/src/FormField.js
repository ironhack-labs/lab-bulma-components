import React from "react";
import "bulma/css/bulma.css";

class FormField extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="field">
        <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div> 
    </React.Fragment>
    );
  }
}

export default FormField;



