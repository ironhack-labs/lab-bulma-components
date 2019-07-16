import React, { Component } from 'react'
import FormField from "./FormField";

export default class Signup extends Component {
  render() {
    return (
     <div className="signClass">
        <div className="moveLeft">
        <FormField/>
<a class="button is-success">Submit</a>
        </div>
     </div>
    )
  }
}



