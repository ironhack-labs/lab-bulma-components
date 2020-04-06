import React, { Component } from "react";
import 'bulma/css/bulma.css';

class Formfield extends Component{
    render() {
      return (

<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      )
    }
}

export default FormField 