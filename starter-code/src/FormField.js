import React, {Component} from 'react';
import './App.css';
class FormField extends Component {
 render () {
   return (
     <div className="field">
       <label className="label">{this.props.label}</label>
       <div className="control">
         <input
           className="input"
           type={this.props.text}
           placeholder={this.props.placeholder}
         />
       </div>
     </div>
   );
 }
}export default FormField;