import React, {Component } from "react";
import 'bulma/css/bulma.css';

class Formfield extends Component {

// eslint-disable-next-line no-useless-constructor
constructor(props){
  super(props);

}

  render(props){

    return (
      <div>
        
        <div className="field">
          <label className="label">{ this.props.label }</label>
          <div className="control">
            <input className="input" type={this.type} placeholder={this.props.placeholder}/>
          </div>
        </div>
        
      </div>
       
    );
  }
}

export default Formfield;