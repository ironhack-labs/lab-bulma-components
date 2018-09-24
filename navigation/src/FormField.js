
import React, { Component } from 'react';
import './App.css';

class FormField extends Component{
  render(){
    return(
      <form>


        <div className="field">
          <label className="label">{this.props.label}</label>
          <div class="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>

        </div>
      </form>



    )
  }
}

export default FormField
