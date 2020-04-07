import React, { Component } from "react";
import 'bulma/css/bulma.css';

class FormField extends Component{
    render() {
      return (
        <div>
          <input class="input" type="text" placeholder="Thibault"></input>
          <input class="input" type="text" placeholder="thibault.delfaud@gmail.com"></input>
        </div>

      )
    }
}

export default FormField 