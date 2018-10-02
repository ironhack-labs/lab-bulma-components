import React from "react";

import CoolButton from "./button"
import FormField from "./form"


class Signup extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     hidden: true
   }
 }
 isHidden(){
   this.setState({
     hidden: !this.state.hidden
     
   })
 }
 
 
 
 render(){
   return (
    <div>
        <CoolButton className="button is-danger" buttonName="FormTest" onClick={this.isHidden.bind(this)} />
      </div>

      // if (!this.state.hidden) {
      // <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      // <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      // }
   )
 }

}

export default Signup
