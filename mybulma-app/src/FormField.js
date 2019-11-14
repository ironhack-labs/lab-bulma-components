
import React from "react";


class FormField extends React.Component {
render(){

return (
  <div className="field" style={{width:'40%'}}>
  <label className="label"></label>
  <div className="control">
  <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
  </div>
          
</div>
);
    }
    }

export default FormField;